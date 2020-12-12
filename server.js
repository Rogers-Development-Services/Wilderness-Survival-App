require('dotenv').config();
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const expressSession = require('express-session');
const authRouter = require("./routes/auth");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Api routes
app.use(require("./routes/apiRoutes"));

// ================================== Auth0 Configuration ========================================
var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-qajxs-8o.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'nomad',
  issuer: 'https://dev-qajxs-8o.us.auth0.com/',
  algorithms: ['RS256']

})

app.use(jwtCheck);

app.get('/authorized', function (req, res) {
  res.send('Secured Resource');
});

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated();
  next();
});

app.use("/", authRouter);

const session = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false
};
if (app.get("env") === "production") {
  // Serve secure cookies, requires HTTPS
  session.cookie.secure = true;
}

app.use(expressSession(session));

var strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL: process.env.AUTH0_CALLBACK_URL,
    passReqToCallback: true
  },
  function (req, accessToken, refreshToken, extraParams, profile, done) {
    console.log(req.query.state);

    passport.authenticate('auth0', function (err, user, info) {
      // ...
      console.log(user);
      console.log(info);
    })(req, res, next);

    console.log(profile);

    return done(null, profile);
  }
);

passport.use(strategy);

// ================================== End of Auth0 Config ========================================

// MongoDB connection configuration
mongoose.connect(  process.env.MONGODB_URI || process.env.DB_HOST || "mongodb://localhost/survivaldb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  console.log('DB Connected Successfully')
);

// ========= This is used for deployment =========
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

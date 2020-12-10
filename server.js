require('dotenv').config()
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const axios = require('axios');
var qs = require('qs');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const expressSession = require('express-session');
const router = express.Router();
const authRouter = require("./auth");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(require('./routes/apiRoutes'));

// ================================== Auth0 Stuff here ========================================
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
//Call Notes API routes
// var apiRoutes= require("./routes/apiRoutes");
// app.use(apiRoutes)

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
    //
    // State value is in req.query.state ...
    console.log(req.query.state);
    //

    passport.authenticate('auth0', function (err, user, info) {
      // ...
    })(req, res, next);

    return done(null, profile);
  }
);

passport.use(strategy);

// ================================== Auth0 Stuff End ========================================

// Send every other request to the React app
// Define any API routes before this runs

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

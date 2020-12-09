require('dotenv').config()
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
// const jwt = require('express-jwt');
// const jwks = require('jwks-rsa');
const axios = require('axios');
var qs = require('qs');
// const passport = require('passport');
// const Auth0Strategy = require('passport-auth0');
// const session = require('express-session');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || process.env.DB_HOST || "mongodb://localhost/survivaldb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  console.log('DB Connected Successfully')
);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//Call Notes API routes
var apiRoutes= require("./routes/apiRoutes");
app.use(apiRoutes)


// ================================== Auth0 Stuff here ========================================

// var jwtCheck = jwt({
//   secret: jwks.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: 'https://dev-qajxs-8o.us.auth0.com/.well-known/jwks.json'
//   }),
//   audience: 'nomad',
//   issuer: 'https://dev-qajxs-8o.us.auth0.com/',
//   algorithms: ['RS256']

// })

// app.use(jwtCheck);
// app.get('/authorized', function (req, res) {
//   res.send('Secured Resource');
// });

// var auth0Strategy = new Auth0Strategy(
//   {
//     domain: process.env.AUTH_DOMAIN,
//     clientID: process.env.AUTH_CLIENT_ID,
//     clientSecret: process.env.AUTH_CLIENT_SECRET,
//     callbackURL: process.env.AUTH_CALLBACK_URL,
//     passReqToCallback: true
//   },
//   function (req, accessToken, refreshToken, extraParams, profile, done) {
//     //
//     // State value is in req.query.state ...
//     console.log(req.query.state);
//     //
//     return done(null, profile);
//   }
// );

// router.get(
//   '/auth/callback',
//   function (req, res, next) {
//     //
//     // State value is in req.query.state ...
//     console.log(req.query.state);
//     //
//     passport.authenticate('auth0', function (err, user, info) {
//       // ...
//     })(req, res, next);
//   }
// );

// passport.use(auth0Strategy);

// app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));

// app.get(
//   '/login',
//   passport.authenticate('auth0', { scope: 'openid email profile' }),
//   function (req, res) {
//     res.redirect('/');
//   }
// );

// app.get(
//   '/login',
//   passport.authenticate('auth0', { audience: 'https://dev-qajxs-8o.us.auth0.com/api/v2/' }),
//   function (req, res) {
//     console.log(res);
//     res.redirect('{window.location.origin}');
//   }
// );

// ================================== Auth0 Stuff End ========================================


// Make a request for a user with a given ID
// axios.get('https://trefle.io/api/v1/plants?token=MujlkXq4t42_hz3sPykcABq3HVQLyIw7Z7Vf7X7Krqk')
//   .then(function (response) {
//     // handle success
//     // console.log(response.data);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });



// Send every other request to the React app
// Define any API routes before this runs

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

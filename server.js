require('dotenv').config()
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');


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

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



// Define API routes here
// PLANTS
const axios = require('axios');

var options = {
  method: 'POST',
  url: 'https://dev-qajxs-8o.us.auth0.com/oauth/token',
  headers : {'content-type': 'application/x-www-form-urlencoded'},
  data: {
    grant_type: 'client_credentials',
    client_id: 'HxkBw2D995h4Okr9JDCjo3uAEEz8BdD0',
    client_secret: 'YOUR_CLIENT_SECRET',
    audience: 'https://dev-qajxs-8o.us.auth0.com/api/v2/'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

mongoose.connect(process.env.MONGODB_URI || process.env.DB_HOST || "mongodb://localhost/survivaldb",
  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
  },
  console.log('DB Connected Successfully')
);
 
// Make a request for a user with a given ID
axios.get('https://trefle.io/api/v1/plants?token=MujlkXq4t42_hz3sPykcABq3HVQLyIw7Z7Vf7X7Krqk')
  .then(function (response) {
    // handle success
    // console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// Api routes
require("./routes/apiRoutes")(app);

// Send every other request to the React app
// Define any API routes before this runs

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

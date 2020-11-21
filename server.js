const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// JSON FILES
// Animals
//Try to get a json file to show up to see if it works (Uncomment to see)
// 'use strict';
// const fs = require('fs');

// let rawdata = fs.readFileSync('./client/src/json/animals.json');
// let animals = JSON.parse(rawdata);
// console.log(animals);

// TIPS
//Try to get a json file to show up to see if it works (Uncomment to see)
// 'use strict';
// const fs = require('fs');

// let rawdata = fs.readFileSync('./client/src/json/tips.json');
// let tips = JSON.parse(rawdata);
// console.log(tips);


// Define API routes here
// PLANTS
const axios = require('axios');

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/survival",
  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
  }
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
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

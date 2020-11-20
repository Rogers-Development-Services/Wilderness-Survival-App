const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require('axios');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
// PLANTS API
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

//Animal json file
'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('animals.json');
let student = JSON.parse(rawdata);
console.log(animal);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

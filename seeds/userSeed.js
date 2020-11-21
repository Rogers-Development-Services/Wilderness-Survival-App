let mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://localhost/survivaldb", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let userSeed = [
    {
        username: "Bobby",
        password: "TrustMe",
        email: "Bobby@email.com"
    },
    {
        username: "Sally",
        password: "TrustMe",
        email: "Sally@email.com"
    },
    {
        username: "Connor",
        password: "TrustMe",
        email: "Connor@email.com"
    },
    {
        username: "Jenny",
        password: "TrustMe",
        email: "Jenny@email.com"
    },
    {
        username: "Spok",
        password: "TrustMe",
        email: "Spok@email.com"
    },
    {
        username: "Goofy",
        password: "TrustMe",
        email: "Goofy@email.com"
    },
    {
        username: "Minnie",
        password: "TrustMe",
        email: "Minnie@email.com"
    },
    {
        username: "Mickey",
        password: "TrustMe",
        email: "Mickey@email.com"
    },
];

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

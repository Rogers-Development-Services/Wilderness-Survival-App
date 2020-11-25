const db = require("../models");

module.exports = function (app) {

  // Routes pertaining to the user accounts

  // Creates a new user in the db
  app.post("/user", ({ body }, res) => {
    const user = body;

    db.User.create({ name: body.username, password: body.password, email: body.email })
      .then(dbUser => {
        console.log(dbUser);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  });

  // Retrieve all users in db
  app.get("/user", (req, res) => {
    db.User.find({})
      .then(dbUser => {
        console.log(dbUser);
        res.json(dbUser);
      })
      .catch(error => {
        console.log(message);
        res.json(error)
      });
  });

  // Routes for Survival ips

  // Retrieve all users in db
  app.get("/tips", (req, res) => {
    db.Tip.find({})
      .then(dbTip => {
        console.log(dbTip);
        res.json(dbTip);
      })
      .catch(error => {
        console.log(message);
        res.json(error)
      });
  });

  // Routes for user notes

  // Creates a new user in the db
  app.post("/notes", ({ body }, res) => {
    const user = body;
    console.log(body);

    db.Note.create({ title: body.title, body: body.body})
      .then(dbNote => {
        console.log(dbNote);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  });

  // Retrieve all notes
  app.get("/notes", (req, res) => {
    db.Note.find({})
      .then(dbNote => {
        console.log(dbNote);
        res.json(dbNote);
      })
      .catch(error => {
        console.log(message);
        res.json(error)
      });
  });

};
const db = require("../models");

module.exports = function (app) {

  // Routes for Survival ips

  // Retrieve all tips in db
  app.get("/tips", (req, res) => {
    db.Tip.find({})
      .then(dbTip => {
        console.log(dbTip);
        res.json(dbTip).code(302);
      })
      .catch(error => {
        console.log(message);
        res.json(error)
      });
  });

  // Routes for Survival Checklist

  // Retrieve all checklist info from db
  app.get("/checklist", (req, res) => {
    db.Checklist.find({})
      .then(dbChecklist => {
        console.log(dbChecklist);
        res.json(dbChecklist);
      })
      .catch(error => {
        console.log(message);
        res.json(error)
      });
  });

  // Routes for user notes

  // Creates a new user in the db
  app.post("/create/notes", ({ body }, res) => {
    const note = body;
    console.log(body);

    db.Note.create({ userID: note.userID, title: note.title, body: note.body })
      .then(dbNote => {
        console.log(dbNote);
        res.json(dbNote).code(201);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  });

  // Retrieve all notes for specified user
  app.get("/notes", (req, res) => {
    db.Note.find({ userID: req.params })
      .then(dbNote => {
        console.log(dbNote);
        res.json(dbNote).code(302);
      })
      .catch(error => {
        console.log(message);
        res.json(error).code
      });
  });

  // Update specified note
  app.post("/update/notes", ({ body }, res) => {
    const note = body;
    console.log(body);

    db.Note.updateOne({ id: note.id, userID: note.userID }, { title: note.title, body: note.body })
      .then(dbNote => {
        console.log(dbNote);
        res.json(dbNote).code(202);
      })
      .catch(({ message }) => {
        console.log(message);
        res.json(message).code(304);
      });
  });

};
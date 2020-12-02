const db = require("../models");

module.exports = function (app) {

  // Retrieve all tips in db
  app.get("/tips", (req, res) => {
    db.Tip.find({})
      .then(dbTip => {
        console.log(dbTip);
        res.json(dbTip).code(302);
      })
      .catch(error => {
        console.log(error);
        res.json(error)
      });
  });
  
  // Retrieve all tips in db
  app.get("/plants", (req, res) => {
    db.Plant.find({})
      .then(dbPlant => {
        console.log(dbPlant);
        res.json(dbPlant).code(302);
      })
      .catch(error => {
        console.log(error);
        res.json(error)
      });
  });

  // Retrieve all checklist info from db
  app.get("/checklist", (req, res) => {
    db.Checklist.find({})
      .then(dbChecklist => {
        console.log(dbChecklist);
        res.json(dbChecklist);
      })
      .catch(error => {
        console.log(error);
        res.json(error)
      });
  });

  // Creates a new user in the db
  app.post("/create/notes", ({ body }, res) => {
    const note = body;
    console.log(body);

    db.Note.create({ userID: note.userID, title: note.title, note: note.note })
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
    db.Note.find({ /* userID: req.params */ })
      .then(dbNote => {
        console.log(dbNote);
        res.json(dbNote);
      })
      .catch(error => {
        console.log(error);
        res.json(error).code(404);
      });
  });

  // Update specified note
  app.post("/update/notes", ({ body }, res) => {
    const note = body;
    console.log(body);

    db.Note.updateOne({ id: note.id, userID: note.userID }, { title: note.title, note: note.note })
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
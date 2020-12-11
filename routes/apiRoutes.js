const db = require("../models");
const app = require("express").Router()

  // Retrieve all tips in db
  app.get("/tips", (req, res) => {
    db.Tip.find({})
      .then(dbTip => {
        res.json(dbTip).code(302);
      })
      .catch(error => {
        console.log(error);
        res.json(error)
      });
  });
  
  // Retrieve all plants in db
  app.get("/plants", (req, res) => {
    db.Plant.find({})
      .then(dbPlant => {
        res.json(dbPlant).code(302);
      })
      .catch(error => {
        console.log(error);
        res.json(error)
      });
  });
 
  // Retrieve all animals in db
  app.get("/animals", (req, res) => {
    db.Animal.find({})
      .then(dbAnimals => {
        res.json(dbAnimals).code(302);
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
  app.post("/api/create/notes", ({ body }, res) => {
    const note = body;
    console.log(note);
    console.log(body, "create route");

    db.Note.create({ /*userID: note.userID, */ title: note.title, note: note.note })
      .then(dbNote => {
        res.json(dbNote).code(201);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  });

  // Retrieve all notes for specified user
  app.get("/api/notes", (req, res) => {
    db.Note.find({ /* userID: req.params */ })
      .then(dbNote => {
        res.json(dbNote);
      })
      .catch(error => {
        console.log(error);
        res.json(error).code(404);
      });
  });

  // Update specified note
  app.put("/api/update/notes", ({ body }, res) => {
    const note = body;
    console.log(body);

    db.Note.updateOne({ id: note.id, userID: note.userID }, { title: note.title, note: note.note })
      .then(dbNote => {
        res.json(dbNote).code(202);
      })
      .catch(({ message }) => {
        console.log(message);
        res.json(message).code(304);
      });
  });

  module.exports = app
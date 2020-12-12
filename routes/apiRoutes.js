const db = require("../models");
const app = require("express").Router()

  // Retrieve all tips in db
  app.get("/tips", (req, res) => {
    db.Tip.find({})
      .then(dbTip => {
        res.json(dbTip);
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
        res.json(dbPlant);
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
        res.json(dbAnimals);
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

    db.Note.create({ userID: note.userID, title: note.title, note: note.note })
      .then(dbNote => {
        res.json(dbNote);
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
        res.json(error);
      });
  });

  // Delete note with specified id
  app.delete("/api/notes", (req, res) => {
    db.Note.findOneAndDelete({ _id: req.body })
      .then(dbNote => {
        res.json(dbNote);
      })
      .catch(error => {
        console.log(error);
        res.json(error);
      });
  });

  // Update specified note
  app.put("/api/update/notes", ({ body }, res) => {
    const note = body;
    console.log(body);

    db.Note.updateOne({ id: note.id, userID: note.userID }, { title: note.title, note: note.note })
      .then(dbNote => {
        res.json(dbNote);
      })
      .catch(({ message }) => {
        console.log(message);
        res.json(message);
      });
  });

  module.exports = app
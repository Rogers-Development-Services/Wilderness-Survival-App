const { func } = require("prop-types");
const db = require("../models");
const { deleteOne } = require("../models/Tip");
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
app.post("/api/notes", ({ body }, res) => {
  const note = body;
  console.log(note);
  // console.log(body, "create route");

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
  db.Note.find({ userID: req.query.id })
    .then(dbNote => {
      res.json(dbNote);
    })
    .catch(error => {
      console.log(error);
      res.json(error);
    });
});

// Delete note with specified id
app.delete("/api/notes", ({ body }, res) => {
  console.log(body.record);
  db.Note.findOneAndDelete({ _id: body.record._id }, function (error, docs) {
    if (error) {
      console.log(error);
    } else {
      console.log('Deleted Note:\n' + docs);
      res.json(docs);
    }
  });
});

// Update specified note
app.put("/api/notes", ({ body }, res) => {
  const note = body;
  console.log(body);

  db.Note.findOneAndUpdate({ _id: body._id }, { title: body.title, note: body.note }, { new: true }, function (error, response) {
    if (error) throw error;
    res.json(response);
    console.log(response);
  })
});

module.exports = app
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NotesSchema = new Schema({
    // Schema for the notes collections of the db
});

const Notes = mongoose.model("Note", NotesSchema);

module.exports = Notes;
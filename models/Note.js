const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NotesSchema = new Schema({
    // Schema for the notes collections of the db
    title: {
        type: String,
        trim: false,
    },

    body: {
        type: String,
        trim: false
    },

    noteCreated: {
        type: Date,
        default: Date.now
    }
});

const Notes = mongoose.model("notes", NotesSchema);

module.exports = Notes;
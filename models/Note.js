const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
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

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
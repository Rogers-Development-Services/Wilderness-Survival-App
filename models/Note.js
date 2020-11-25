const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    userID: {
        type: String,
        trim: false
    },

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
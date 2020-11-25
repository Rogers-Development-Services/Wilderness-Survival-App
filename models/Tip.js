const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TipSchema = new Schema({
    // Schema for the survival tips collections of the db
    title: {
        type: String,
        trim: false,
    },

    description: {
        type: String,
        trim: false,
    },

    note: {
        type: String,
        trim: false,
    }
});

const Tip = mongoose.model("Tip", TipSchema);

module.exports = Tip;
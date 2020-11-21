const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SurvivalTipsSchema = new Schema({
    // Schema for the survival tips collections of the db
    title: {
        type: String,
        trim: false,
    },

    body: {
        type: String,
        trim: false
    }
});

const SurvivalTips = mongoose.model("survivaltips", SurvivalTipsSchema);

module.exports = SurvivalTips;
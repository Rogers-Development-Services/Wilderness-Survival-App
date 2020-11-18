const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SurvivalTipsSchema = new Schema({
    // Schema for the survival tips collections of the db
});

const SurvivalTips = mongoose.model("SurvivalTips", SurvivalTipsSchema);

module.exports = SurvivalTips;
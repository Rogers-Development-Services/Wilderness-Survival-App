const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
    id: {
        type: String,
        trim: false
    },

    name: {
        type: String,
        trim: false,
    },

    description: {
        type: String,
        trim: false
    },
    
    image: {
        type: String,
        trim: true
    },
    
    footprint: {
        type: String,
        trim: true
    },
    
    map: {
        type: String,
        trim: true
    },
    
    status: {
        type: String,
        trim: true
    }
});

const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;
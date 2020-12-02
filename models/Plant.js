const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlantSchema = new Schema({
    id: {
        type: String,
        trim: false
    },

    name: {
        type: String,
        trim: false,
    },

    info: {
        type: String,
        trim: false
    },

    unsefullness: {
        type: String,
        trim: false
    },
    
    caution: {
        type: String,
        trim: false
    },
    
    image: {
        type: String,
        trim: true
    }
});

const Plant = mongoose.model("Plant", PlantSchema);

module.exports = Plant;
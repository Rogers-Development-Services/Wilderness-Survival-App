const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FavoritesSchema = new Schema({
    // Schema for the favorites collections of the db
});

const Favorites = mongoose.model("Favorites", FavoritesSchema);

module.exports = Favorites;
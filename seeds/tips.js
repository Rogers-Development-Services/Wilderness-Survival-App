let mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://localhost/survivaldb", {
    useNewUrlParser: true,
    useFindAndModify: false
});

let tipJSON = require('../client/src/json/tips.json');

tipJSON.map(data => tipSeed = [
    {
        title: data.title,
        description: data.description,
        notes: data.notes
    }
]);

db.Tip.deleteMany({})
    .then(() => db.Tip.collection.insertMany(tipSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

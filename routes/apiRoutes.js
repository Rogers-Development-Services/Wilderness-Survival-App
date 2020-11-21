const db = require("../models");

module.exports = function (app) {

    // Creates a new user in the db
    app.post("/create/user", ({ body }, res) => {
        const user = body;

        db.user.save(user, (error, saved) => {
            if (errror) {
                console.log(error);
            } else {
                console.log(saved);
                res.send(saved);
            }
        });
    });

};
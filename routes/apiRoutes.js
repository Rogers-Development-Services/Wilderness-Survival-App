const db = require("../models");

module.exports = function (app) {

    // Creates a new user in the db
    app.post("/create/user", ({ body }, res) => {
        const user = body;

        db.User.create({ name: body.username, password: body.password, email: body.email })
        .then(dbUser => {
          console.log(dbUser);
        })
        .catch(({ message }) => {
          console.log(message);
        });
    });

};
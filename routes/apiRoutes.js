const db = require("../db/models");

module.exports = function(app) {

    // Creates a new user in the db
    app.post("/api/create/user", async (req, res)=> {
        try{
            const response = await db.survivaldb.create({type: "user"})
            res.json(response);
        }
        catch(error){
            console.log("An error occurred while creating account: ", error)
            res.json(error);
        }
    });
    
    // Creates a new note in the db linked to user's account
    app.post("/api/create/note", async (req, res)=> {
        try{
            const response = await db.survivaldb.create({type: "note"})
            res.json(response);
        }
        catch(error){
            console.log("An error occurred while creating note: ", error)
            res.json(error);
        }
    });

};
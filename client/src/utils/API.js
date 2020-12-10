import axios from "axios";

export default {
    saveNote: function (record) {
        console.log(record);
        return axios.put("/api/update/notes", record).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
    },

<<<<<<< HEAD
    createNote: function (record) {
        return axios.post("/api/create/notes", record).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
    },
=======
    createNote: function (record){
        return axios.post("/api/create/notes", record).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        },
>>>>>>> cb337fcbcaac575393b9fd0c1da29f069ce40b7c

    getNotes: function () {
        return axios.get("/api/notes")
    }
}


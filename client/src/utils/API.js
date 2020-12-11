import axios from "axios";

export default {
    saveNote: function (record) {
        console.log(record);
        return axios.put("/api/update/notes", record).then(function (response) {
            console.log("axios", response);
        })
            .catch(function (error) {
                console.log(error);
            });
    },

    createNote: function (record){
        console.log(record);
        return axios.post("/api/create/notes", record).then(function (response) {
            console.log("POSTaxios", response);
        })
        .catch(function (error) {
          console.log(error);
        });
        },

    getNotes: function () {
        console.log('Request in API.js file');
        return axios.get("/api/notes")//.then(function(results) {
        //     console.log('Route Worked');
        //     console.log(results);
        // });
    }
}


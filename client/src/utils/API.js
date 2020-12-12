import axios from "axios";

export default {
    updateNote: function (record) {
        console.log(record);
        return axios.put("/api/update/notes", record)
            .then(function (response) {
                console.log("UPDATE Axios", response);
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    createNote: function (record) {
        console.log(record);
        return axios.post("/api/create/notes", record)
            .then(function (response) {
                console.log("POST Axios", response);
            })
            .catch(function (error) {
                console.log(error);
            });
    },

<<<<<<< HEAD
    deleteNote: function (record) {
        console.log(record);
        return axios.delete("/api/notes", record)
            .then(function (response) {
                console.log("DELETE Axios", response);
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    getNotes: function (userID) {
        const query = '/api/notes';
        return axios.get(query, {
            params: {
                id: userID
            }
        })
=======
    getNotes: function () {
        return axios.get("/api/notes")
>>>>>>> 0c115c193c4b9651ad09e1df794ebfbafe6c3ab1
    }
}


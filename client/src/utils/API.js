import axios from "axios";

export default {
    saveNote: function (record) {
        console.log(record);
        return axios.put("/api/update/notes", record).then(function (response) {
            console.log("UPDATE Axios", response);
        })
            .catch(function (error) {
                console.log(error);
            });
    },

    createNote: function (record) {
        console.log(record);
        return axios.post("/api/create/notes", record).then(function (response) {
            console.log("POST Axios", response);
        })
            .catch(function (error) {
                console.log(error);
            });
    },

    deleteNote: function (record) {
        console.log(record);
        return axios.delete("/api/notes", record).then(function (response) {
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
    }
}


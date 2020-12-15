import axios from "axios";

export default {
    updateNote: function (record) {
        console.log(record);
        return axios.put("/api/notes", record)
            .then(function (response) {
                // console.log("UPDATE Axios", response);
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    createNote: function (record) {
        console.log(record);
        return axios.post("/api/notes", record)
            .then(function (response) {
                console.log("POST Axios", response);
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    deleteNote: function (record) {
        console.log("This is the record being passed to the DELETE request: \n", record);
        return axios.delete('/api/notes', {
            data: {
                record: record
            }
        })
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


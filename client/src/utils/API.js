import axios from "axios";

export default{
    saveNote: function (record){
        console.log (record);
        return axios.post("/update/notes", record).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    createNote: function (record){
        return axios.post("/create/notes", record).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    getNote: function (record){
        return axios.get("/notes").then(function(response) {
            console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        
    }
}
 
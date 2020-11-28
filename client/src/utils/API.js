import axios from "axios";
const BASEURL = "  https://trefle.io/api/v1/plants?token=";
const APIKEY = "6lH5U_fPdvbEZPvKRPNAGxm0Rrzgdq9s1NFQYjmkD0c";

export default {
    getPlantList: function () {
      return axios.get(BASEURL + APIKEY + "&page=2");
    }
  };
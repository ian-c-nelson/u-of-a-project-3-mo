import axios from "axios";

export default () => {
  this.baseUrl = "/api";
  
  this.get = function(endPoint) {
    const url = `${this.baseUrl}${endPoint}`;
    return axios.get(url);
  };

  this.post = function(endPoint, data) {
    const url = `${this.baseUrl}${endPoint}`;
    return axios.post(url, data);
  };

  this.getPhrase = () => {
    return this.get("/api/v1/phrase");
  };

};

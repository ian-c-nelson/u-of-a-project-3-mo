import axios from "axios";

const baseUrl = "/api/v1/";

const get = endPoint => {
  const url = `${baseUrl}${endPoint}`;
  return axios.get(url);
};

const post = (endPoint, data) => {
  const url = `${baseUrl}${endPoint}`;
  return axios.post(url, data);
};

export default {
  getPhrase: () => get("phrase")
};

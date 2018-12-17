import axios from "axios";

import config from "../config";

const baseUrl = "https://www.googleapis.com/youtube/v3/";
const topicId = "/m/07yv9"; // Vehicles

const get = endPoint => {
  const url = `${baseUrl}${endPoint}`;
  return axios.get(url);
};

export default {
  getVideo: (
    procedure,
    make = "",
    model = "",
    year = "",
    maxResults = 5,
    orderby = "relevance"
  ) => {
    const query = procedure.split(" ").join("+");
    return get(
      `search?key=${
        config.youTubeApiKey
      }&part=snippet,id&order=${orderby}&topicId=${topicId}&type=video&videoEmbeddable=true&q=How+To+${query}${
        make ? `+${make}` : ""
      }${model ? `+${model}` : ""}${
        year ? `+${year}` : ""
      }&maxResults=${maxResults}`
    );
  }
};

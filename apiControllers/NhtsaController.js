import axios from "axios";

export default () => {
  this.baseUrl = "https://vpic.nhtsa.dot.gov/api";
  this.formatParam = "format=json";

  this.getFromNhtsa = function(endPoint) {
    const url = `${endPoint}?${this.formatParam}`;
    return axios.get(url);
  };

  // Single ID
  this.getCarByVin = function(vin) {
    const endPoint = `/vehicles/decodevinvalues/${vin}`;
    return this.getFromNhtsa(endPoint);
  };
};

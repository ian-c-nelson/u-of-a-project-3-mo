const axios = require("axios");
const baseUrl = "/api/v1/";

module.exports = {
  // create account
  signUp: credentials => axios.post(`${baseUrl}auth/signup`, credentials),

  // log into account
  logIn: credentials => axios.post(`${baseUrl}auth/login`, credentials),

  // Gets all users
  getUsers: () => axios.get(`${baseUrl}user`),

  // Gets the user with the given id
  getUser: id => axios.get(`${baseUrl}user/${id}`),

  // Deletes the user with the given id
  deleteUser: id => axios.delete(`${baseUrl}user/${id}`),

  // Saves a user to the database
  saveUser: userData => axios.post(`${baseUrl}user`, userData),

  // Gets all user vehicles
  getUserVehicles: id => axios.get(`${baseUrl}user/${id}/vehicles`),

  // Gets the user vehicle with the given id
  getVehicle: id => axios.get(`${baseUrl}vehicle/${id}`),

  // Gets the maintenance for the vehicle the given id
  getVehicleMaintenance: id => axios.get(`${baseUrl}vehicle/${id}/maintenance`),

  // Deletes the user vehicle with the given id
  deleteVehicle: id => axios.delete(`${baseUrl}vehicle/${id}`),

  // Saves a user vehicle to the database
  saveVehicle: vehicle => {
    console.log(vehicle);
    return axios.post(`${baseUrl}vehicle`, vehicle);
  },

  // Gets all maintenance
  getAllMaintenance: () => axios.get(`${baseUrl}maintenance`),

  // Gets the maintenance with the given id
  getMaintenance: id => axios.get(`${baseUrl}maintenance/${id}`),

  // Deletes the maintenance with the given id
  deleteUserMaintenance: id => axios.delete(`${baseUrl}maintenance/${id}`),

  // Saves a user to the database
  saveUserMaintenance: maintenanceData =>
    axios.post(`${baseUrl}maintenance`, maintenanceData)
};

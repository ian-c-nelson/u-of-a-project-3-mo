const axios = require("axios");
const baseUrl = "/api/v1/";

module.exports = {
  // Gets all users
  getUsers: () => axios.get(`${baseUrl}user`),
  // Gets the user with the given id
  getUser: id => axios.get(`${baseUrl}user/${id}`),
  // Deletes the user with the given id
  deleteUser: id => axios.delete(`${baseUrl}user/${id}`),
  // Saves a user to the database
  saveUser: userData => axios.post(`${baseUrl}user`, userData),

  signUp: userData => axios.post(`${baseUrl}signup`, userData),
  logIn: credentials => axios.post(`${baseUrl}login`, credentials),


  // Gets all user vehicles
  getUserVehicles: () => axios.get(`${baseUrl}uservehicle`),
  // Gets the user vehicle with the given id
  getUserVehicle: id => axios.get(`${baseUrl}uservehicle/${id}`),
  // Deletes the user vehicle with the given id
  deleteUserVehicle: id => axios.delete(`${baseUrl}uservehicle/${id}`),
  // Saves a user vehicle to the database
  saveUserVehicle: userVehicleData => axios.post(`${baseUrl}userVehicle`, userVehicleData),

  // Gets all maintenance
  getUserMaintenances: () => axios.get(`${baseUrl}maintenance`),
  // Gets the maintenance with the given id
  getUserMaintenance: id => axios.get(`${baseUrl}maintenance/${id}`),
  // Deletes the maintenance with the given id
  deleteUserMaintenance: id => axios.delete(`${baseUrl}maintenance/${id}`),
  // Saves a user to the database
  saveUserMaintenance: maintenanceData => axios.post(`${baseUrl}maintenance`, maintenanceData),

  // Gets all manufacturer vehicles
  getManVehicles: () => axios.get(`${baseUrl}manvehicle`),
  // Gets the manufacturer vehicle with the given id
  getManVehicle: id => axios.get(`${baseUrl}manvehicle/${id}`),
  // Deletes the manufacturer vehicle with the given id
  deleteManVehicle: id => axios.delete(`${baseUrl}manvehicle/${id}`),
  // Saves a manufacturer  vehicle to the database
  saveManVehicle: manVehicleData => axios.post(`${baseUrl}manVehicle`, manVehicleData)
};

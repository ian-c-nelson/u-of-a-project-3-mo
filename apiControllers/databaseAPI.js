import axios from "axios";

export default {
  // Gets all users
  getUsers: function () {
    return axios.get("/api/user");
  },
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function (id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/user", userData);
  },


  // Gets all user vehicles
  getUserVehicles: function () {
    return axios.get("/api/uservehicle");
  },
  // Gets the user vehicle with the given id
  getUserVehicle: function (id) {
    return axios.get("/api/uservehicle/" + id);
  },
  // Deletes the user vehicle with the given id
  deleteUserVehicle: function (id) {
    return axios.delete("/api/uservehicle/" + id);
  },
  // Saves a user vehicle to the database
  saveUserVehicle: function (userData) {
    return axios.post("/api/userVehicle", userData);
  },


  // Gets all maintenance
  getUserMaintenances: function () {
    return axios.get("/api/maintenance");
  },
  // Gets the maintenance with the given id
  getUserMaintenance: function (id) {
    return axios.get("/api/maintenance/" + id);
  },
  // Deletes the maintenance with the given id
  deleteUserMaintenance: function (id) {
    return axios.delete("/api/maintenance/" + id);
  },
  // Saves a user to the database
  saveUserMaintenance: function (userData) {
    return axios.post("/api/maintenance", userData);
  },


   // Gets all manufactured vehicles
   getManVehicles: function () {
    return axios.get("/api/manvehicle");
  },
  // Gets the manufactured vehicle with the given id
  getManVehicle: function (id) {
    return axios.get("/api/manvehicle/" + id);
  },
  // Deletes the manufactured vehicle with the given id
  deleteManVehicle: function (id) {
    return axios.delete("/api/manvehicle/" + id);
  },
  // Saves a manufactured  vehicle to the database
  saveManVehicle: function (userData) {
    return axios.post("/api/manVehicle", userData);
  },

};


// eslint-disable-next-line global-require
// export default { User: require("./user") };

const models = {
    User: require("./User"),
    ManVehicle: require("./ManVehicle"),
    UserVehicle: require("./UserVehicle"),
    AddMaintenance: require("./AddMaintenance")
  };

  export default models;
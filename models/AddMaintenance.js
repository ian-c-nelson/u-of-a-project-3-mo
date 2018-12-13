const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const AddMaintenanceSchema = new Schema({
  type: {
    type: String,
    validate: {
      validator: function (v) {
        return v === "Actual" || v === "Planned";
      },
      message: `${props.path} must be Actual or Planned`
    },
    required: true,
  },

  description: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    required: true
  },
  
  model: {
    type: String,
    required: true
  },

  make: {
    type: String,
    required: true
  },

  year: {
    type: Number,
    required: true
  },

  mileage: {
    type: Number,
    required: true,
  },
  
  userVehicle: {
    type: Schema.Types.ObjectId,
    ref: "UserVehicle"
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },

});

// This creates our model from the above schema, using mongoose's model method
var AddMaintenance = mongoose.model("AddMaintenance", AddMaintenanceSchema);

// Export the Note model
module.exports = AddMaintenance;
const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const UserVehicleSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  vinNumber: {
    type: String
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

  color: {
    type: String,
    required: false
  },

  mileage: {
    type: Number,
    required: true,
  },

  notes: {
    type: String,
    required: false
  },

  maintenance: [{
    type: Schema.Types.ObjectId,
    ref: "AddMaintenance"
  }],

  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  
});

// This creates our model from the above schema, using mongoose's model method
const UserVehicle = model("UserVehicle", UserVehicleSchema);

// Export the Note model
module.exports = UserVehicle;

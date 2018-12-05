import { Schema, model } from "mongoose";


const UserVehicleSchema = new Schema({
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
  }
  
});

// This creates our model from the above schema, using mongoose's model method
var UserVehicle = mongoose.model("UserVehicle", UserVehicleSchema);

// Export the Note model
module.exports = UserVehicle;
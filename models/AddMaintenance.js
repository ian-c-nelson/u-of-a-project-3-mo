const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const AddMaintenanceSchema = new Schema({
  type: {
    type: String,
    validate: {
      validator: (v) => v === "Actual" || v === "Planned",
      message: "Type must be Actual or Planned"
    },
    required: true
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
    required: true
  },

  userVehicle: {
    type: Schema.Types.ObjectId,
    ref: "UserVehicle"
  }
});

// This creates our model from the above schema, using mongoose's model method
const AddMaintenance = model("AddMaintenance", AddMaintenanceSchema);



// Export the Note model
module.exports = AddMaintenance;

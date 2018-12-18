const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const { Schema, model } = mongoose;
const { genSalt, hash, compare } = bcryptjs;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  vehicles: [{
    type: Schema.Types.ObjectId,
    ref: "UserVehicle"
  }]
});

// On save hook, encrypt password
UserSchema.pre("save", function(next) {
  genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    hash(this.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      this.password = hash;
      return next();
    });
  });
});

// create a method to check a users password
UserSchema.methods.isValidPassword = function(candidatePassword, callback) {
  compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return callback(err);
    }
    return callback(null, isMatch);
  });
};

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", UserSchema);

module.exports = User;

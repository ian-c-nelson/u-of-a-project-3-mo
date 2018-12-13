const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcryptjs = require(bcryptjs);
const genSalt = bcryptjs.genSalt;
const hash = bcryptjs.hash;
const compare = bcryptjs.compare;

// import { genSalt, hash, compare } from "bcryptjs";

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

  userVehicle: {
    type: Schema.Types.ObjectId,
    ref: "UserVehicle"
  },
  
  addMaintenance: {
    type: Schema.Types.ObjectId,
    ref: "AddMaintenance"
  }
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

// const User = model("User", UserSchema);

// export default User;

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the Note model
module.exports = User;

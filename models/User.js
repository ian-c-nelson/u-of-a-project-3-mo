import { Schema, model } from "mongoose";
import { genSalt, hash, compare } from "bcryptjs";

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

const User = model("User", UserSchema);

export default User;

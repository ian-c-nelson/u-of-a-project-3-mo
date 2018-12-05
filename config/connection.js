const mongoose = require("mongoose");

module.exports = function(databaseURL) {
  mongoose.connect(
    databaseURL,
    {
      useNewUrlParser: true
    },
    () => console.log("connection to mongodb")
  );
  mongoose.Promise = Promise;
};

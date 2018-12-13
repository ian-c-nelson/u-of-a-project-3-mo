const mongoose = require("mongoose");
const db = require("../models/");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/project3"
);

const userVehicleSeed = [
  {
    model: "bronco",
    make: "ford",
    year: "2004",
    color: "black",
    mileage: 2000,
    date: new Date(Date.now())
  },
  {
    model: "silverado",
    make: "chevy",
    year: "2018",
    color: "white",
    mileage: 2000,
    date: new Date(Date.now())
  }

];

const ManVehicleSeed = [
  {
    model: "bronco",
    make: "ford",
    year: "2004",
    color: "black",
    mileage: 2000,
    date: new Date(Date.now())
  },
  {
    model: "silverado",
    make: "chevy",
    year: "2018",
    color: "white",
    mileage: 2000,
    date: new Date(Date.now())
  }

];

const UserSeed = [
  {
    email: "user1@gmail.com",
    password: "user1",
    date: new Date(Date.now())
  },
  {
    email: "user2@gmail.com",
    password: "user2",
    date: new Date(Date.now())
  }

];

const AddMaintenanceSeed = [
  {
    type: "planned",
    description: "oil change",
    date: new Date(Date.now),
    model: "silverado",
    make: "chevey",
    year: 2018,
    mileage: 2000,
    date: new Date(Date.now())
  },
  {
    type: "planned",
    description: "oil change",
    date: new Date(Date.now),
    model: "bronco",
    make: "ford",
    year: 2004,
    mileage: 2000,
    date: new Date(Date.now())
  }

];

db.UserVehicle
  .remove({})
  .then(() => db.UserVehicle.collection.insertMany(userVehicleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.ManVehicle
  .remove({})
  .then(() => db.ManVehicle.collection.insertMany(ManVehicleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.User
  .remove({})
  .then(() => db.User.collection.insertMany(UserSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.AddMaintenance
  .remove({})
  .then(() => db.AddMaintenance.collection.insertMany(AddMaintenanceSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

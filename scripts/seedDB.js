const mongoose = require("mongoose");
const db = require("../models/");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/project3"
);

const userVehicleSeed = [
  {
    name: "OJ's Vehicle",
    vinNumber: "VNN",
    year: "1993",
    make: "ford",
    model: "bronco",
    color: "white",
    mileage: 2000,
    date: Date.now()
  },
  {
    name: "Who's Vehicle",
    vinNumber: "VNN",
    year: "2018",
    make: "chevy",
    model: "silverado",
    color: "white",
    mileage: 2000,
    date: Date.now()
  }

];

const ManVehicleSeed = [
  {
    year: "2004",
    make: "ford",
    model: "bronco",
    color: "black",
    mileage: 2000,
    date: Date.now()
  },
  {
    year: "2018",
    make: "chevy",
    model: "silverado",
    color: "white",
    mileage: 2000,
    date: Date.now()
  }

];

const UserSeed = [
  {
    email: "user1@gmail.com",
    password: "user1",
    date: Date.now()
  },
  {
    email: "user2@gmail.com",
    password: "user2",
    date: Date.now()
  },
  {
    email: "test.user1@mo.com",
    password: "P@ssW0rd1",
    date: Date.now()
  },
  {
    email: "test.user2@mo.com",
    password: "P@ssW0rd2",
    date: Date.now()
  }
];

const AddMaintenanceSeed = [
  {
    type: "planned",
    description: "oil change",
    model: "silverado",
    make: "chevey",
    year: 2018,
    mileage: 2000,
    date: Date.now()
  },
  {
    type: "planned",
    description: "oil change",
    model: "bronco",
    make: "ford",
    year: 2004,
    mileage: 2000,
    date: Date.now()
  }

];

db.UserVehicle
  .remove({})
  .then(() => db.UserVehicle.collection.insertMany(userVehicleSeed))
  .then(data => {
    console.log(`${data.result.n  } records inserted!`);
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
    console.log(`${data.result.n  } records inserted!`);
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
    console.log(`${data.result.n  } records inserted!`);
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
    console.log(`${data.result.n  } records inserted!`);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

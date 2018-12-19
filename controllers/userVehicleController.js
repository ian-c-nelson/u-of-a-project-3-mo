const db = require("../models");

// Defining methods for the userVehicleController
module.exports = {
  findAll(req, res) {
    db.UserVehicle.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

      console.log("find all");
  },
  findById(req, res) {

    console.log("find by id");
    console.log(req.params);

    db.UserVehicle.findById(req.params.id)
      .then(dbModel => {
        console.log(dbModel);
        return res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  findByUserId(req, res) {
    console.log("find by user id");

    db.UserVehicle.find({ user: req.params.id })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create(req, res) {
    db.UserVehicle.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update(req, res) {
    db.UserVehicle.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove(req, res) {
    db.UserVehicle.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

const router = require("express").Router();
// const userController = require("../../controllers/userController");
const userController = require("../../../../../controllers/userController");
const vehicleController = require("../../../../../controllers/userVehicleController");

// Matches with "/api/user"
router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

router.route("/:id/vehicles").get(vehicleController.findByUserId);

// // secured routes ===============================================================
// router.get("/:email", (req, res) => {
//   db.User.findOne({ email: req.params.email })
//     .then(dbuser => {
//       if (dbuser) {
//         return res.json(dbuser);
//       }

//       // if the user doesn't exist return an error
//       return res.status(404).send({ error: "User not fount." });
//     })
//     .catch(err => next(err));
// });

// router.delete("/user/:email", requireAuth, (req, res) => {
//   db.User.findOne({ email: req.params.email })
//     .then(dbuser => {
//       if (dbuser) {
//         dbuser.remove().then(() => res.json(dbuser));
//       }

//       // if the user doesn't exist return an error
//       return res.status(404).send({ error: "User not fount." });
//     })
//     .catch(err => next(err));
// });

module.exports = router;

const router = require("express").Router();
const userVehicleController = require("../../../../../controllers/userVehicleController");

// Matches with "/api/vehicle"
router.route("/")
  .get(userVehicleController.findAll)
  .post(userVehicleController.create);

// Matches with "/api/vehicle/:id"
router
  .route("/:id")
  .get(userVehicleController.findById)
  .put(userVehicleController.update)
  .delete(userVehicleController.remove);

module.exports = router;

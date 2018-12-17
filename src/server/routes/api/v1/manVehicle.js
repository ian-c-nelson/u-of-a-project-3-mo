const router = require("express").Router();
const manVehicleController = require("../../../../../controllers/manVehicleController");


// Matches with "/api/manvehicle"
router.route("/")
  .get(manVehicleController.findAll)
  .post(manVehicleController.create);

// Matches with "/api/manvehicle/:id"
router
  .route("/:id")
  .get(manVehicleController.findById)
  .put(manVehicleController.update)
  .delete(manVehicleController.remove);

module.exports = router;

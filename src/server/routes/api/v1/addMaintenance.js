const router = require("express").Router();
const addMaintenanceController = require("../../../../../controllers/addMaintenanceController");

// Matches with "/api/maintenance"
router.route("/")
  .get(addMaintenanceController.findAll)
  .post(addMaintenanceController.create);

// Matches with "/api/maintenance/:id"
router
  .route("/:id")
  .get(addMaintenanceController.findById)
  .put(addMaintenanceController.update)
  .delete(addMaintenanceController.remove);

module.exports = router;

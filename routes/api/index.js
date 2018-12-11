const router = require("express").Router();
const userRoutes = require("./user");
const userVehicleRoutes = require("./userVehicle")
const maintenanceRoutes = require("./addMaintenance")
const manVehicleRoutes = require("./manVehicle")


// User routes
router.use("/user", userRoutes);

// User vehicle routes
router.use("/uservehicle", userVehicleRoutes)

// Maintenance routes
router.use("/maintenance", maintenanceRoutes)

// Manufactured Vehicle Routes
router.use("/manvehicle", manVehicleRoutes)

module.exports = router;

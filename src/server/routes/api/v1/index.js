const router = require("express").Router();
const passport = require("passport");
const authRoutes = require("./auth");
const userRoutes = require("./user");
const userVehicleRoutes = require("./userVehicle");
const maintenanceRoutes = require("./addMaintenance");
const manVehicleRoutes = require("./manVehicle");

const requireAuth = passport.authenticate("jwt", { session: false });

// Auth routes
router.use("/auth", authRoutes);

// User routes
router.use("/user", requireAuth, userRoutes);

// User vehicle routes
router.use("/uservehicle", requireAuth, userVehicleRoutes);

// Maintenance routes
router.use("/maintenance", requireAuth, maintenanceRoutes);

// Manufactured Vehicle Routes
router.use("/manvehicle", manVehicleRoutes);

router.get("/", (req, res) => {
  res.send("Welcome to the v1 routes!");
});

router.get("/phrase", (req, res) => {
  res.send({
    value: "Redux request test.",
    error: ""
  });
});


module.exports = router;

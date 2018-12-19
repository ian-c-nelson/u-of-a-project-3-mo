const router = require("express").Router();
const passport = require("passport");
const authRoutes = require("./auth");
const userRoutes = require("./user");
const vehicleRoutes = require("./vehicles");
const maintenanceRoutes = require("./addMaintenance");

const requireAuth = passport.authenticate("jwt", { session: false });

// Auth routes
router.use("/auth", authRoutes);

// User routes
router.use("/user", userRoutes);
// router.use("/user", requireAuth, userRoutes);

// User vehicle routes
router.use("/vehicles", vehicleRoutes);
// router.use("/uservehicle", requireAuth, vehicleRoutes);

// Maintenance routes
router.use("/maintenance", maintenanceRoutes);
// router.use("/maintenance", requireAuth, maintenanceRoutes);

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

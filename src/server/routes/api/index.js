const path = require("path");
const router = require("express").Router();
const passport = require("passport");
const requireAuth = passport.authenticate("jwt", { session: false });

const routes = require("./v1");

// API Routes
router.use("/v1", routes);

module.exports = router;

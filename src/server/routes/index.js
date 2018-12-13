const router = require("express").Router();

router.get("/heartbeat", (req, res) => {
  res.send("Welcome to the v1 routes!");
});

router.use("/v1", require("./v1").default);

export default router;

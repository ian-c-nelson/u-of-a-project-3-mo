const router = require("express").Router();

router.use("/v1", require("./v1").default);

export default router;

import path from "path";
const router = require("express").Router();

router.use("/v1", require("./v1").default);

router.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "path/to/your/index.html"), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

export default router;

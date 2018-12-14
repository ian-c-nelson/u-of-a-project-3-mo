/* eslint-disable no-undef */
const passport = require("passport");
const router = require("express").Router();
const db = require("../../../../../models");
const controllers = require("../../../../../controllers");

const { tokenEncoder } = require("../../../../../services/passport");

const requireSignin = passport.authenticate("local", { session: false });
const requireAuth = passport.authenticate("jwt", { session: false });

// open routes ===============================================================

router.get("/", (req, res) => {
  res.send("Welcome to the v1 routes!");
});

router.get("/phrase", (req, res) => {
  res.send({
    value: "Redux request test.",
    error: ""
  });
});

router.post("/signin", requireSignin, (req, res) => {
  console.log(req.body);

  res.json({ token: tokenEncoder(req.user), user: req.user });
});

router.post("/signup", (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    res.status(422).send({ error: "You must provide an email and password" });
  }

  db.User.findOne({ email })
    .then(dbuser => {
      // if the user exists return an error
      if (dbuser) {
        return res.status(422).send({ error: "Email already in use" });
      }

      // create new user object
      const user = new db.User({ email, password });
      // save the user
      user.save().then(user => {
        console.log(user);
        // respond with the success if the user existed
        res.json({ token: tokenEncoder(user), user });
      });
    })
    .catch(err => next(err));
});

// secured routes ===============================================================
router.get("/user/:email", requireAuth, (req, res) => {
  db.User.findOne({ email: req.params.email })
    .then(dbuser => {
      if (dbuser) {
        return res.json(dbuser);
      }

      // if the user doesn't exist return an error
      return res.status(404).send({ error: "User not fount." });
    })
    .catch(err => next(err));
});

router.delete("/user/:email", requireAuth, (req, res) => {
  db.User.findOne({ email: req.params.email })
    .then(dbuser => {
      if (dbuser) {
        dbuser.remove().then(() => res.json(dbuser));
      }

      // if the user doesn't exist return an error
      return res.status(404).send({ error: "User not fount." });
    })
    .catch(err => next(err));
});


module.exports = router;

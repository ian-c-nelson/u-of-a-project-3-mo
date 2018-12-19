/* eslint-disable no-undef */
import passport from "passport";
import jwt from "jwt-simple";
import db from "../../../../models";
import config from "../../../../config";

const router = require("express").Router();

const requireSignin = passport.authenticate("local", { session: false });
const requireAuth = passport.authenticate("jwt", { session: false });

function tokenizer(user) {
  const timestamp = new Date().getTime();
  return jwt.encode(
    {
      sub: user.id,
      iat: timestamp
    },
    config.secret
  );
}

// open routes ===============================================================

router.get("/", (req, res) => {
  res.send("Welcome to the v1 routes!");
});

router.post("/signin", requireSignin, (req, res) => {
  res.json({ token: tokenizer(req.user) });
});

router.post("/signup", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(422).send({ error: "You must provide an email and password" });
  }

  db.User.findOne({ email })
    .then((dbuser) => {
      // if the user exists return an error
      if (dbuser) {
        return res.status(422).send({ error: "Email already in use" });
      }

      // create new user object
      const user = new db.User({ email, password });
      // save the user
      user.save().then((user) => {
        console.log(user);
        // respond with the success if the user existed
        res.json({ token: tokenizer(user) });
      });
    })
    .catch(err => next(err));
});

// secured routes ===============================================================

router.get("/protected", requireAuth, (req, res) => {
  res.send("You have been protected!");
});

module.exports = router;

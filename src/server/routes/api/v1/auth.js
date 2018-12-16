/* eslint-disable no-undef */
const passport = require("passport");
const router = require("express").Router();
const db = require("../../../../../models");

const { tokenEncoder } = require("../../../../../services/passport");
const requireSignin = passport.authenticate("local", { session: false });

router.post("/signin", requireSignin, (req, res) => {
  console.log(req.body);

  res.json({ token: tokenEncoder(req.user), user: req.user });
});

router.post("/signup", (req, res) => {
  console.log(req.body);

  const { email, password, passwordConfirmation } = req.body;

  if (!email || !password) {
    res.status(422).send({ error: "You must provide an email and password" });
  }

  if (password.length < 8) {
    res.status(422).send({ error: "Password must be at least 8 characters." });
  }

  if (password !== passwordConfirmation) {
    res.status(422).send({ error: "Password confirmation does not match password." });
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

module.exports = router;

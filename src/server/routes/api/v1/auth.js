/* eslint-disable no-undef */
const passport = require("passport");
const router = require("express").Router();
const db = require("../../../../../models");
const validation = require("../../../../../services/validation");

const { tokenEncoder } = require("../../../../../services/passport");
const requireLogIn = passport.authenticate("local", { session: false });

router.post("/logIn", requireLogIn, (req, res) => {
  const response = { token: tokenEncoder(req.user), user: req.user };
  res.json({ token: tokenEncoder(req.user), user: req.user });
});

router.post("/signup", (req, res) => {
  const { email, password } = req.body;
  const validationResults = validation.validateCredentials(req.body);

  if(!validationResults.isValid) {
    return res.status(422).send({ error: "Validation Faulure", messages: validationResults.messages });
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
        // respond with the success if the user existed
        res.json({ token: tokenEncoder(user), user });
      });
    })
    .catch(err => next(err));
});

module.exports = router;

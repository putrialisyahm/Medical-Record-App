const express = require("express");
const router = express.Router();
const passport = require("passport");
const auth = require("../middlewares/auth");
const userValidator = require("../middlewares/validators/userValidator");
const UserController = require("../controllers/user");

//register Routes
router.post("/register", [
  userValidator.register,
  function (req, res, next) {
    passport.authenticate(
      "register",
      {
        session: false,
      },
      function (err, user, info) {
        if (!user) {
          res.status(401).json({
            status: "Error",
            message: info.message,
          });
          return;
        }
        UserController.register(user, req, res, next);
      }
    )(req, res, next);
  },
]);

//Login Routes
router.post("/login", [
  userValidator.login,
  function (req, res, next) {
    passport.authenticate(
      "login",
      {
        session: false,
      },
      function (err, user, info) {
        if (!user) {
          res.status(401).json({
            status: "Error",
            message: info.message,
          });
          return;
        }
        UserController.login(user, req, res, next);
      }
    )(req, res, next);
  },
]);
module.exports = router;

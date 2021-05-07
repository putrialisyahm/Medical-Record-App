const express = require("express");
const router = express.Router();
const HospitalController = require("../controllers/hospital");

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

const passport = require("passport"); // Import passport
const localStrategy = require("passport-local").Strategy; // Import Strategy
const bcrypt = require("bcrypt"); // Import bcrypt
const JWTstrategy = require("passport-jwt").Strategy; // Import JWT Strategy
const ExtractJWT = require("passport-jwt").ExtractJwt; // Import ExtractJWT
const user = require("../../models/user");

// If user sign up
passport.use(
  "register",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true, // read other requests
    },
    async (req, email, password, done) => {
      const hash = bcrypt.hashSync(password, 10);
      user
        .create({
          name: req.body.name,
          email: email,
          password: hash,
        })
        .then((result) => {
          return done(null, result, {
            message: "User created!",
          });
        })
        .catch((err) => {
          return done(null, false, {
            message: "User can't be created",
          });
        });
    }
  )
);

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      // find user depends on email
      const userLogin = await user
        .findOne({
          email: email,
        })
        .select("name email password");

      // if user not found
      if (!userLogin) {
        return done(null, false, {
          message: "Email or Password is wrong",
        });
      }

      // login success
      return done(null, userLogin, {
        message: "Login success!",
      });
    }
  )
);

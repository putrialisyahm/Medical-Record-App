const User = require("../models/user");

exports.register = async (user, req, res, next) => {
  try {
    const body = {
      _id: user._id,
    };
    const token = jwt.sign(
      {
        user: body,
      },
      "secret_password"
    );
    const userInfo = {
      email: user.email,
      name: user.name,
    };

    res.status(200).json({
      user: userInfo,
      message: "Successfully register!",
      token: token,
    });
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong",
    });
  }

  exports.login = async (user, req, res, next) => {
    try {
      const body = {
        _id: user._id,
      };
      const token = jwt.sign(
        {
          user: body,
        },
        "secret_password"
      );
      const userInfo = {
        email: user.email,
        name: user.name,
      };
      res.status(200).json({
        message: "Login Success",
        data,
      });
    } catch (err) {
      res.status(400).json({
        message: "Something went wrong",
      });
    }
  };
};

const User = require("../../models/user");

exports.register = (req, res) => {
  User.findOne({ email: req.body.email}, (error, user) => {
    if (user) {
      return res.status(400).json({
        message: "Admin already registered",
      });
    }
    const { firstName, lastName, email, password } = req.body;
    const admin = new User({
      firstName,
      lastName,
      email,
      password,
      role: "admin",
    });
    admin.save((error, data) => {
      if (data) {
        return res.status(200).json({
          message: "Admin created Successfully",
        });
      }
      if (error) {
        return res.status(400).json({
          message: "Something went wrong",
        });
      }
    });
  });
};

exports.findUser = (req, res) => {
  User.find((error, user) => {
    if (!error) {
      res.send(user);
    }
  });
};

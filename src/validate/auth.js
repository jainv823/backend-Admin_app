const { check, validationResult } = require("express-validator");

exports.validateRegisterRequest = [
  check("firstName").notEmpty().withMessage("first Name is required"),
  check("lastName").notEmpty().withMessage("last name is required"),
  check("email").isEmail().withMessage("valid email is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("password must have atleast 6 characters long"),
  check("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password confirmation is incorrect");
    }
    return true;
  }),
];

exports.validateLoginRequest = [
  check("email").isEmail().withMessage("valid emailis required"),
  check("password")
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("valid password is required"),
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({ errors: errors.array()[0].msg });
  }
  next();
};

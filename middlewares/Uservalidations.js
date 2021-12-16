const { check, validationResult } = require("express-validator");

exports.registervalidations = () => [
  check("Email").isEmail(),
  check("Password", "password length min is 6 caracter")
    .isLength({ min: 6 })
    .notEmpty(),
  check("Name").notEmpty(),
  check("Last_Name").notEmpty(),
  // check("Country").notEmpty(),
  // check("Compagny_Name").notEmpty(),
  check("Number").notEmpty().isLength(8),
];

exports.loginValidate = () => [
  check("Email", "should be email").isEmail(),
  check("Password", "enter a valid password").isLength({ min: 6 }),
];

exports.validations = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

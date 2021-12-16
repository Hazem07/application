const Company = require("../models/Company");
// const jwt = require("jsonwebtoken");

exports.isOwner = async (req, res, next) => {
  try {
    const findComapny = await Company.findOne({ id_user: req.user._id });
    if (findComapny) {
      req.company = findComapny;
      return next();
    } else {
      return res.status(401).sens({ errors: [{ msg: "not authorized" }] });
    }
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: "middleware isOwner can not be handled" }] });
  }
};

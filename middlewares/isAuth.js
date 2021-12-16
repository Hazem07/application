const User = require("../models/Users");
const jwt = require("jsonwebtoken");

exports.isAuth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    // console.log("token", token);
    if (!token) {
      return res
        .status(401)
        .send({ errors: [{ msg: "you are not authorized" }] });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findOne({ _id: decoded.id }).select("-Password");
    if (!user) {
      return res
        .status(401)
        .send({ errors: [{ msg: "you are not authorized2" }] });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ errors: [{ msg: "you are not authorized" }] });
  }
};

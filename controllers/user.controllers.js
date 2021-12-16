const User = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.Register = async (req, res) => {
  try {
    const { Email, Password, Number } = req.body;
    const findUser = await User.findOne({ Email });
    if (findUser) {
      return res
        .status(400)
        .send({ errors: [{ msg: "email should be unique" }] });
    }
    const findNumber = await User.findOne({ Number });
    if (findNumber) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Number already exist in another account" }] });
    }
    const newUser = new User({ ...req.body });
    const saltRound = 10;
    const hashPassword = bcrypt.hashSync(Password, saltRound);
    newUser.Password = hashPassword;
    await newUser.save();
    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "3h" }
    );
    res.status(200).send({ msg: "register success", user: newUser, token });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ errors: [{ msg: "cannot register the user" }] });
  }
};
exports.Login = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    const findUser = await User.findOne({ Email });

    if (!findUser) {
      return res.status(400).send({ errors: [{ msg: "bad credential" }] });
    }

    const comparePass = await bcrypt.compare(Password, findUser.Password);

    if (!comparePass) {
      return res.status(400).send({ errors: [{ msg: "bad credential" }] });
    }
    const token = jwt.sign(
      {
        id: findUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "3h" }
    );
    res.status(200).send({ msg: "login successfully", user: findUser, token });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "can not login", error }] });
  }
};

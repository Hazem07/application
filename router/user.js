const express = require("express");
const {
  registervalidations,
  validations,
  loginValidate,
} = require("../middlewares/Uservalidations");
const { Register, Login } = require("../controllers/user.controllers");
const { isAuth } = require("../middlewares/isAuth");
const Users = require("../models/Users");

const router = express.Router();
router.get("/", (req, res) => {
  res.send("test route");
});
// router.get("/:_id", isAuth, async (req, res) => {
//   try {
//     const finduserbyid = await User.findById(req.params._id);
//     res.status(200).send({ msg: "get it succ", user: finduserbyid });
//   } catch (error) {
//     res.status(400).send({ msg: "can not get the contact ", error });
//   }
// });

router.post("/register", registervalidations(), validations, Register);

router.post("/login", loginValidate(), validations, Login);

// router.get("/current", isAuth, (req, res) => {
//   res.send({ msg: "authentifie", user: req.user });
// });
router.get("/current", isAuth, (req, res) => {
  res.send({ user: req.user });
});
// router.put("/updateOne/:_id", isAuth, async (req, res) => {
//   try {
//     const { _id } = req.params;
//     // let findPerson = await Person.findById(_id);
//     await User.updateOne(
//       { _id },
//       {
//         $set: {
//           Name: req.body.Name,
//           Last_Name: req.Last_Name,
//           Email: req.body.Email,
//           Password: req.body.Password,
//           Number: req.body.Number,

//         },
//       }
//     );
//     // await findPerson.save();
//     res.send({ msg: "done" });
//   } catch (error) {
//     res.status(400).send();
//   }
// });
router.put("/:_id", isAuth, async (req, res) => {
  try {
    //   const r = await product.updateOne(
    //     { _id: req.params.id },
    //     { $set: { ...req.body } }
    //   );
    //   console.log(r);
    //   if (r.modifiedCount) {
    //     return res.send({ msg: "updated" });
    //   }
    //   // res.send({ msg: "there is no modification" });
    // } catch (error) {
    //   res.send({ msg: "can not modify it" });
    // }
    // // };
    const { _id } = req.params;
    // let findPerson = await Person.findById(_id);
    await User.updateOne(
      { _id },
      {
        $set: {
          Name: req.body.Name,
          Last_Name: req.body.Last_Name,
          Email: req.body.Email,
          Password: req.body.Password,
          Number: req.body.Number,
        },
      }
    );
    // await findPerson.save();
    res.send({ msg: "done" });
  } catch (error) {
    res.status(400).send();
  }
});

module.exports = router;

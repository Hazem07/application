const express = require("express");

const { isAuth } = require("../middlewares/isAuth");

const Company = require("../models/Company");
const {
  registervalidations,
  validationsComp,
} = require("../middlewares/Companyvalidations");
const router = express.Router();

router.post(
  "/addcompany",
  // registervalidations(),
  // validationsComp,
  isAuth,
  async (req, res) => {
    try {
      // const { Numéro_SIREN, numero, email } = req.body;
      // id user fel req.user
      // test if the user has a company
      const findComapny = await Company.findOne({ id_user: req.user._id });
      if (findComapny) {
        return res
          .status(400)
          .send({ errors: [{ msg: "u already have a company" }] });
      }
      // const findEmail = await Company.findOne({ email });
      // if (findEmail) {
      //   return res
      //     .status(400)
      //     .send({ errors: [{ msg: "email should be unique" }] });
      // }
      // const findNumbeer = await Company.findOne({ numero });
      // if (findNumbeer) {
      //   return res.status(400).send({
      //     errors: [{ msg: "Number already exist in another account" }],
      //   });
      // }

      // const findSiren = await Company.findOne({ Numéro_SIREN });
      // if (findSiren) {
      //   return res.status(400).send({
      //     errors: [{ msg: "Number Siren already exist in another account" }],
      //   });
      // }

      const newCompany = new Company({ ...req.body, id_user: req.user._id });
      // console.log(req.user);
      await User.updateOne(
        { _id: req.user._id },
        { $set: { hasCompany: true } }
      );
      await newCompany.save();
      res.send({ msg: "Company is saved", newCompany });
    } catch (error) {
      res.send(error);
    }
  }
);
router.get("/mycompany", isAuth, async (req, res) => {
  try {
    const findCompany = await Company.findOne({ id_user: req.user._id });
    res.send({ msg: "your Company are:", company: findCompany });
  } catch (error) {
    res.send(error);
  }
});
router.get("/:_id", async (req, res) => {
  try {
    const findproductbyid = await Company.findById(req.params._id);
    res.status(200).send({ msg: "get it succ", company: findproductbyid });
  } catch (error) {
    res.status(400).send({ msg: "can not get it", error });
  }
});
router.get("/allCompany", async (req, res) => {
  try {
    const allCompany = await Company.find().populate("id_user");
    res.send({ msg: "all posts", Companies: allCompany });
  } catch (error) {
    res.send({ error });
  }
});
router.put("/edit/:_id", isAuth, async (req, res) => {
  try {
    const { _id } = req.params;
    // let findPerson = await Person.findById(_id);
    await Company.updateOne(
      { _id },
      {
        $set: {
          description: req.body.description,
          Nom: req.body.Nom,
          Date_création: req.body.Date_création,
          Statut_juridique: req.body.Statut_juridique,
          Adresse: req.body.Adresse,
          Numéro_SIREN: req.body.Numéro_SIREN,
          Secteur_activité: req.body.Secteur_activité,
          Implantation: req.body.Implantation,
          numero: req.body.numero,
          email: req.body.email,
          Site: req.body.Site,
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

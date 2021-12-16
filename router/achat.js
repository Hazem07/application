const express = require("express");

const { isAuth } = require("../middlewares/isAuth");
const product = require("../models/product");
const achat = require("../models/achat");
const Company = require("../models/Company");
const Users = require("../models/Users");
const router = express.Router();
router.post("/commande", isAuth, async (req, res) => {
  try {
    const newCommande = new achat({
      ...req.body,
      id_user: req.user._id,
      //   id_company: req.company._id,
      // id_company: req.product._id,
    });

    await newCommande.save();
    res.send({ msg: "Commande is saved", commande: newCommande });
  } catch (error) {
    res.send(error);
  }
});
router.get("/:_id", async (req, res) => {
  try {
    const findcommandebyid = await achat.findById(req.params._id);
    res.status(200).send({ msg: "get it succ", commande: findcommandebyid });
  } catch (error) {
    res.status(400).send({ msg: "can not get it", error });
  }
});
router.get("/:_id", async (req, res) => {
  try {
    const findBuyer = await product.findById(req.params._id);
    res.status(200).send({ msg: "get it succ", findBuyer });
  } catch (error) {
    res.status(400).send({ msg: "can not get it", error });
  }
});
router.get("/company/:_id", async (req, res) => {
  try {
    const findproductbyid = await Company.findById(req.params._id);
    res.status(200).send({ msg: "get it succ", company: findproductbyid });
  } catch (error) {
    res.status(400).send({ msg: "can not get it", error });
  }
});
router.get("/user/:_id", async (req, res) => {
  try {
    const findproductbyid = await Users.findById(req.params._id);
    res.status(200).send({ msg: "get it succ", user: findproductbyid });
  } catch (error) {
    res.status(400).send({ msg: "can not get it", error });
  }
});
module.exports = router;
// ******************************************************************************

const express = require("express");
const { isAuth } = require("../middlewares/isAuth");
const { isOwner } = require("../middlewares/isOwner");

const product = require("../models/product");

const router = express.Router();
router.post(
  "/addproduct",
  //   registervalidations(),
  //   validationsComp,
  isAuth,
  isOwner,
  async (req, res) => {
    try {
      const newProduct = new product({
        ...req.body,
        id_company: req.company._id,
      });

      // console.log(req.user);
      await newProduct.save();
      res.send({ msg: "Product is saved", newProduct });
    } catch (error) {
      res.send(error);
    }
  }
);
router.get("/allProduct", async (req, res) => {
  try {
    const findproduct = await product.find({});
    res.send({
      msg: "all factory products",
      products: findproduct,
    });
  } catch (error) {
    res.status(400).send({ msg: "can not get the product" });
  }
});
router.get("/allProductme", isAuth, isOwner, async (req, res) => {
  try {
    const findproduct = await product.find({ id_company: req.company._id });
    res.send({ msg: "my factory product list", products: findproduct });
  } catch (error) {
    res.status(400).send({ msg: "can not get the product" });
  }
});
router.get("/productname", async (req, res) => {
  try {
    const { Nom_du_produit } = req.body;
    const findproduct = await product.findOne({ Nom_du_produit });
    res.send({ msg: "get the Product", product: findproduct });
  } catch (error) {
    res.status(400).send({ msg: "can not get the product" });
  }
});

router.get("/:_id", async (req, res) => {
  try {
    const findproductbyid = await product.findById(req.params._id);
    res.status(200).send({ msg: "get it succ", product: findproductbyid });
  } catch (error) {
    res.status(400).send({ msg: "can not get it", error });
  }
});

router.put("/:_id", isAuth, isOwner, async (req, res) => {
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
    await product.updateOne(
      { _id },
      {
        $set: {
          Nom_du_produit: req.body.Nom_du_produit,
          categories: req.body.categories,
          description: req.body.description,
          min_order: req.body.min_order,
          max_order: req.body.max_order,
          prix_min_order: req.body.prix_min_order,
          prix_max_order: req.body.prix_max_order,
        },
      }
    );
    // await findPerson.save();
    res.send({ msg: "done" });
  } catch (error) {
    res.status(400).send();
  }
});
router.delete("/delete/:_id", isAuth, isOwner, async (req, res) => {
  const { _id } = req.params;
  try {
    const Del = await product.findByIdAndDelete(_id);
    if (!Del) return res.sendStatus(404);
    return res.send({ msg: "contact Deleted" });
  } catch (error) {
    return res.sendStatus(400);
  }
});

module.exports = router;

const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const productSchema = new Schema({
  id_company: { type: Schema.Types.ObjectId, ref: "company" },
  Nom_du_produit: {
    type: String,
    required: true,
  },
  categories: { type: String, required: true },
  description: { type: String, required: true },

  min_order: { type: Number, required: true },
  max_order: { type: Number, required: true },
  prix_min_order: { type: Number, required: true },
  prix_max_order: { type: Number, required: true },
  date: { type: Date, default: Date.now() },
});
module.exports = Product = model("product", productSchema);

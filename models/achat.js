const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const AchatSchema = new Schema({
  id_user: { type: Schema.Types.ObjectId, ref: "user" },
  // id_company: { type: Schema.Types.ObjectId, ref: "company" },
  // id_product: { type: Schema.Types.ObjectId, ref: "product" },
  date: { type: Date, default: Date.now() },

  Name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  // City: {
  //   type: String,
  //   required: true,
  // },
  zipcode: {
    type: Number,
    required: true,
  },
  adress1: {
    type: String,
    required: true,
  },
  adress2: {
    type: String,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
});
module.exports = Achat = model("achat", AchatSchema);

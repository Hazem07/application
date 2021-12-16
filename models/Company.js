const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const companySchema = new Schema({
  id_user: { type: Schema.Types.ObjectId, ref: "user" },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now() },

  Nom: {
    type: String,
    required: true,
  },

  // Date_création: {
  //   type: Date,
  //   required: true,
  // },
  // Statut_juridique: {
  //   type: String,
  //   required: true,
  // },
  // Adresse: {
  //   type: String,
  //   required: true,
  // },
  // Numéro_SIREN: {
  //   type: Number,
  //   required: true,
  // },
  // Secteur_activité: {
  //   type: String,
  //   required: true,
  // },
  // Implantation: {
  //   type: String,
  //   required: true,
  // },
  numero: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  // Site: {
  //   type: String,
  // },
  isVerfied: {
    type: Boolean,
    default: false,
  },
  // country: {
  //   type: String,
  //   required: true,
  // },
});
module.exports = Company = model("company", companySchema);

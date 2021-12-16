const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  // Gender: {
  //   type: String,
  //   required: true,
  //   possibleValues: ["Male", "Female"],
  // },
  // Country: {
  //   type: String,
  //   required: true,
  // },
  Name: {
    type: String,
    required: true,
  },
  Last_Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  // Compagny_Name: {
  //   type: String,
  //   required: true,
  // },
  Number: {
    type: Number,
    required: true,
  },
  hasCompany: {
    type: Boolean,
    default: false,
  },
  // Role: {
  //   type: String,
  //   required: true,
  //   enum: ["Buyer", "Seller", "Both"],
  // },
  // Gender: {
  //   type: String,
  //   required: true,
  //   enum: ["Male", "Female"],
  // },
  // Role: {
  //   type: String,
  //   required: true,
  //   possibleValues: ["Buyer", "Seller", "Both"],
  // },
});
module.exports = User = model("user", UserSchema);

const express = require("express");
const connectDB = require("./config/connectDB");
require("dotenv").config();
const app = express();

connectDB();
app.use(express.json());
app.use("/api/user", require("./router/user"));
app.use("/api/company", require("./router/company"));
app.use("/api/product", require("./router/product"));
app.use("/api/achat", require("./router/achat"));

const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`server is running on PORT =${PORT}`)
);

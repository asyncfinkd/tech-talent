const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
// process.env.PWD = process.cwd();
// app.use("/public", express.static(process.env.PWD + "/public"));

app.use(cors());

app.use(express.json());

mongoose.connect(
  "mongodb+srv://giga:vivomini@rest.nl9di.mongodb.net/techtalent?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

const Login = require("./router/user/UserRouter");
app.use("/api", Login);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
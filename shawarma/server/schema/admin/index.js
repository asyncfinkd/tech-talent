const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const adminSchema = mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  role: String,
});

const Admin = mongoose.model("admins", adminSchema);

module.exports = Admin;

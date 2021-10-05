const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const FollowedCompaniesId = mongoose.Schema({
  id: { type: String },
});

const userSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  fullName: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: { type: String, required: true },
  interest: { type: String },
  phone: { type: String },
  socialNetwork: { type: String },
  role: { type: String },
  createdAt: { type: String },
  followedCompaniesId: [FollowedCompaniesId],
});

const User = mongoose.model("users", userSchema);

module.exports = User;

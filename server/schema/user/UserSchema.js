const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const FollowedCompaniesId = mongoose.Schema({
  id: { type: String },
});

const FollowedEdusId = mongoose.Schema({
  id: { type: String },
});

const userSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  fullName: { type: String },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: { type: String },
  interest: { type: String },
  phone: { type: String },
  socialNetwork: { type: String },
  role: { type: String },
  createdAt: { type: String },
  followedCompaniesId: [FollowedCompaniesId],
  followedEdusId: [FollowedEdusId],
  cv: { type: String },
});

const User = mongoose.model("users", userSchema);

module.exports = User;

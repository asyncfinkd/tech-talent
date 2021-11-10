const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const Tags = mongoose.Schema({
  text: { type: String },
});

const FollowedUsersId = mongoose.Schema({
  id: { type: String },
});

const companiesSchema = mongoose.Schema({
  about: { type: String },
  createdAt: { type: String },
  employees: { type: String },
  founded: { type: String },
  hq: { type: String },
  industry: { type: String },
  jobCount: { type: Number },
  logoUrl: { type: String },
  notifyEmails: { type: String },
  objective: { type: String },
  phone: { type: String },
  remoteFriendly: { type: Boolean },
  state: { type: String },
  tags: [Tags],
  url: { type: String },
  slug: { type: String },
  followedUsersId: [FollowedUsersId],
  backgroundColor: { type: String },
  primaryText: { type: String },
  primaryTextColor: { type: String },
  secondaryText: { type: String },
  secondaryTextColor: { type: String },
  name: { type: String },
  approved: { type: Boolean },
});

const Companies = mongoose.model("companies", companiesSchema);

module.exports = Companies;

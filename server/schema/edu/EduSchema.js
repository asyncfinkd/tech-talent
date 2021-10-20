const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const Tags = mongoose.Schema({
  text: { type: String },
});

const FollowedUsersId = mongoose.Schema({
  id: { type: String },
});

const CoursesId = mongoose.Schema({
  id: { type: String },
});

const EduSchema = mongoose.Schema({
  about: { type: String },
  address: { type: String },
  backgroundColor: { type: String },
  createdAt: { type: String },
  founded: { type: String },
  location: { type: String },
  logoUrl: { type: String },
  name: { type: String },
  notifyEmails: { type: String },
  objective: { type: String },
  primaryText: { type: String },
  primaryTextColor: { type: String },
  reviewState: { type: String },
  secondaryText: { type: String },
  secondaryTextColor: { type: String },
  slug: { type: String },
  state: { type: String },
  tags: [Tags],
  url: { type: String },
  followedUsersId: [FollowedUsersId],
  coursesId: [CoursesId],
});

const Edu = mongoose.model("edus", EduSchema);

module.exports = Edu;

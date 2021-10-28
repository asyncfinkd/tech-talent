const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const Tags = mongoose.Schema({
  text: { type: String },
});

const Academy = mongoose.Schema({
  id: { type: String },
  name: { type: String },
  slug: { type: String },
  logoUrl: { type: String },
  ogImageUrl: { type: String },
  address: { type: String },
  backgroundColor: { type: String },
  founded: { type: String },
  createdAt: { type: String },
  location: { type: String },
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
  about: { type: String },
});

const CoursesSchema = mongoose.Schema({
  academy: { Academy },
  createdAt: { type: String },
  description: { type: String },
  durationInWeeks: { type: String },
  endDate: { type: String },
  field: { name: { type: String }, slug: { type: String } },
  isInstallmentAvailable: { type: Boolean },
  lecturers: [],
  name: { type: String },
  platformId: { type: String },
  ogImageUrl: { type: String },
  price: { type: Number },
  reviewState: { type: String },
  slug: { type: String },
  slugName: { type: String },
  startDate: { type: String },
  state: { type: String },
  tags: [Tags],
  url: { type: String },
  youtubeUrl: { type: String },
  category: { name: { type: String }, slug: { type: String } },
  sessionDurationInHours: { type: String },
  sessionCount: { type: String },
  durationInWeeks: { type: String },
  category: {
    iconUrl: { type: String },
    imageUrl: { type: String },
    name: { type: String },
  },
});

const Courses = mongoose.model("courses", CoursesSchema);

module.exports = Courses;

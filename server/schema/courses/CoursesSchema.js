const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const Field = mongoose.Schema({
  name: { type: String },
  slug: { type: String },
});

const Tags = mongoose.Schema({
  text: { type: String },
});

const Academy = mongoose.Schema({
  id: { type: String },
  logoUrl: { type: String },
  name: { type: String },
  ogImageUrl: { type: String },
  slug: { type: String },
});

const CoursesSchema = mongoose.Schema({
  academy: { Academy },
  createdAt: { type: String },
  description: { type: String },
  durationInWeeks: { type: String },
  endDate: { type: String },
  field: { Field },
  isInstallmentAvailable: { type: Boolean },
  lecturers: [],
  name: { type: String },
  platformId: { type: String },
  ogImageUrl: { type: String },
  price: { type: String },
  reviewState: { type: String },
  slug: { type: String },
  slugName: { type: String },
  startDate: { type: String },
  state: { type: String },
  tags: [Tags],
  url: { type: String },
  youtubeUrl: { type: String },
});

const Courses = mongoose.model("courses", CoursesSchema);

module.exports = Courses;

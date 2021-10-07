const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const Tags = mongoose.Schema({
  text: { type: String },
});

const EduSchema = mongoose.Schema({
  about: { type: String },
  address: { type: String },
  backgroundColor: { type: String },
  courseCount: { type: Number },
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
});

const Edu = mongoose.model("edus", EduSchema);

module.exports = Edu;

// {
//     "_id": { "$oid": "615eb3d64509826acf0d02af" },
//     "about": "თბილისის კომუნიკაციის სკოლა არის საგანმანათლებლო დაწესებულება, რომელიც 2018 წლიდან ოპერირებს და სტუდენტებს ტექნოლოგიების, მარკეტინგისა და დიზაინის მიმართულებით სთავაზობს  პროფესიულ პროგრამებს. სკოლის მისიაა აამაღლოს პროფესიონალიზმი, შესაბამისად ჩვენთვის მნიშვნელოვანია სწავლების ხარისხი, ისევე როგორც, კურსდამთავრებულების კვალიფიკაცია. სწორედ ამიტომ, დარგის წამყვან ლოკალურ თუ უცხოელ ლექტორებთან ერთად ვმუშაობთ პროგრამებზე, რაც საშუალებას გვაძლევს თითოეული პროგრამის შინაარსი იყოს ლოგიკურად გამართული და ამომწურავი.",
//     "address": null,
//     "backgroundColor": "#2bb372",
//     "courseCount": { "$numberInt": "10" },
//     "createdAt": "2021-04-27T07:38:15.057Z",
//     "founded": "2018",
//     "location": "Hybrid",
//     "logoUrl": "/images/uploads/e73dafaa-6631-435e-8627-1872a9ff635e.png",
//     "name": "Tbilisi School of Communication",
//     "notifyEmails": [],
//     "objective": "Traffic",
//     "primaryText": null,
//     "primaryTextColor": "#ffffff",
//     "reviewState": "Accepted",
//     "secondaryText": "College & University",
//     "secondaryTextColor": "#2bb372",
//     "slug": "commschool",
//     "state": "Active",
//     "tags": [
//       { "text": "Technology" },
//       { "text": "Marketing" },
//       { "text": "Design" },
//       { "text": "Communication" }
//     ],
//     "url": "https://commschool.ge/"
//   }

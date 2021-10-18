const express = require("express");
const cors = require("cors");
const app = express();
const Application = require("./lib/Application/ApplicationStart");
const Connect = require("./lib/connect/Connect");
const fileUpload = require("express-fileupload");

var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
process.env.PWD = process.cwd();
app.use("/public", express.static(process.env.PWD + "/public"));

app.use(cors());
app.use(express.json());
app.use(
  fileUpload({
    createParentPath: true,
  })
);

Connect.DB(
  "mongodb+srv://giga:vivomini@rest.nl9di.mongodb.net/techtalent?retryWrites=true&w=majority"
);

const User = require("./router/user/UserRouter");
app.use("/api", User);

const Companies = require("./router/companies/CompaniesRouter");
app.use("/api", Companies);

const Edu = require("./router/edu/EduRouter");
app.use("/api", Edu);

const Courses = require("./router/courses/CoursesRouter");
app.use("/api", Courses);

Application.start(3001, app);

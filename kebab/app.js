let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let Connect = require("./lib/connect/index");
let indexRouter = require("./routes/index");
let usersRouter = require("./routes/users");
let cors = require("cors");
let app = express();

app.use(cors());

// view engine setup
process.env.PWD = process.cwd();
app.use("/public/images", express.static(process.env.PWD + "/public/images"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

const User = require("./routes/user/index");
app.use("/api", User);

const Edu = require("./routes/edu/index");
app.use("/api", Edu);

const Companies = require("./routes/companies/index");
app.use("/api", Companies);

const Manager = require("./routes/manager/index");
app.use("/api", Manager);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

Connect.db(
  "mongodb+srv://giga:vivomini@rest.nl9di.mongodb.net/techtalent?retryWrites=true&w=majority"
);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

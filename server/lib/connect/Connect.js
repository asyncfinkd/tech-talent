const mongoose = require("mongoose");

module.exports.DB = function (url) {
  mongoose.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
  );
};

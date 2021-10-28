const mongoose = require("mongoose");

module.exports.db = function (URL) {
  mongoose.connect(
    URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
  );
};

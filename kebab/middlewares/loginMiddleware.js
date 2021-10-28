const jwt = require("jsonwebtoken");
const env = require("../environment/app/env.json");

module.exports = async function (req, res, next) {
  const token = JSON.parse(
    JSON.stringify(req.headers.authorization.split(" ")[1])
  );
  try {
    if (!token) {
      res.status(502).json({ message: "ტოკენი არ არსებობს", success: false });
      next();
    } else {
      const decodedData = jwt.verify(token, env.ACCESS_TOKEN);
      req.email = decodedData.email;
      req.firstName = decodedData.firstName;
      req.lastName = decodedData.lastName;
      req.fullName = decodedData.fullName;
      req.interest = decodedData.interest;
      req.phone = decodedData.phone;
      req.socialNetwork = decodedData.socialNetwork;
      req._id = decodedData._id;
      req.role = decodedData.role;
      next();
    }
  } catch (err) {
    res.status(502).json({
      message: "თქვენი სესია ამოიწურა",
      expired: true,
      success: false,
    });
  }
};

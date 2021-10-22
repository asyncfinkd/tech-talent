// const jwt = require("jsonwebtoken");
// const env = require("../application/environment/env.json");

// module.exports = async function (req, res, next) {
//   const token = JSON.parse(
//     JSON.stringify(req.headers.authorization.split(" ")[1])
//   );
//   try {
//     if (!token) {
//       res.json({ msg: "ტოკენი არ არსებობს" });
//       next();
//     } else {
//       const decodedData = jwt.verify(token, env.ACCESS_TOKEN);
//       req.email = decodedData.email;
//       req.firstName = decodedData.firstName;
//       req.lastName = decodedData.lastName;
//       req.fullName = decodedData.fullName;
//       req.interest = decodedData.interest;
//       req.phone = decodedData.phone;
//       req.socialNetwork = decodedData.socialNetwork;
//       req._id = decodedData._id;
//       next();
//     }
//   } catch (err) {
//     res.json({ msg: "თქვენი სესია ამოიწურა", expired: true });
//   }
// };

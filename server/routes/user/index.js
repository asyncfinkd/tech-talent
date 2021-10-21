const router = require("express").Router();
const UserSchema = require("../../schema/user/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("../../environment/app/env.json");

router.route("/login").post(async (req, res) => {
  let getUser = await UserSchema.findOne({ email: req.body.email });

  if (getUser == null) {
    res.status(401).json({ message: "User doesn't  exist", success: false });
  } else if (getUser.password.length > 0) {
    bcrypt.compare(req.body.password, result.password, (err, verified) => {
      if (verified) {
        const {
          email,
          firstName,
          lastName,
          fullName,
          interest,
          role,
          phone,
          socialNetwork,
          _id,
          cv,
        } = result;
        const access_token = jwt.sign(
          {
            email,
            firstName,
            lastName,
            fullName,
            interest,
            role,
            phone,
            socialNetwork,
            _id,
            cv,
          },
          env.ACCESS_TOKEN,
          {
            expiresIn: "12h",
          }
        );
        res.status(200).json({ success: true, access_token: access_token });
      } else {
        res.status(401).json({ message: "Password is wrong", success: false });
      }
    });
  }
});

module.exports = router;

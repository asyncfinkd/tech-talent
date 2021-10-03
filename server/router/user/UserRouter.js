const router = require("express").Router();
const UserSchema = require("../../schema/user/UserSchema");
const jwt = require("jsonwebtoken");
const env = require("../../env.json");

router.route("/login").post(async (req, res) => {
  UserSchema.findOne({ email: req.body.email }).then((result) => {
    if (result == null) {
      res.json({ message: "User doesn't exist", success: false });
    } else if (result.password === req.body.password) {
      const { email, firstName, lastName, fullName } = result;
      const access_token = jwt.sign(
        { email, firstName, lastName, fullName },
        env.ACCESS_TOKEN,
        {
          expiresIn: "12h",
        }
      );
      res.json({ success: true, access_token: access_token });
    } else {
      res.json({ message: "Password is wrong", success: false });
    }
  });
});

module.exports = router;

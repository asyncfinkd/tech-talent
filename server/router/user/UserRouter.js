const router = require("express").Router();
const UserSchema = require("../../schema/user/UserSchema");

router.route("/login").post(async (req, res) => {
  UserSchema.findOne({ email: req.body.email }).then((result) => {
    if (result == null) {
      res.json({ message: "User doesn't exist", success: false });
    } else if (result.password === req.body.password) {
      res.json({ success: true });
    } else {
      res.json({ message: "Password is wrong", success: false });
    }
  });
});

module.exports = router;

const router = require("express").Router();
const CompaniesSchema = require("../../schema/companies");
const UserSchema = require("../../schema/user");
const bcrypt = require("bcrypt");

router.route("/manager/register").post(async (req, res) => {
  try {
    var salt = await bcrypt.genSalt();
    var hashedPassword = await bcrypt.hash(req.body.password, salt);
  } catch (err) {
    res.status(500).json(err);
  }

  try {
    UserSchema.findOne({ email: req.body.email }).then((result) => {
      if (result) {
        res
          .status(502)
          .json({ message: "Email is already registered", success: false });
      } else {
        const User = new UserSchema({
          email: req.body.email,
          password: hashedPassword,
          role: "manager",
        }).save();

        res.json({ message: "Successfuly", success: true });
      }
    });
  } catch (err) {
    res.status(502).json(err);
  }
});

module.exports = router;

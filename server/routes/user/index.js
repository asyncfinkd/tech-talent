const router = require("express").Router();
const UserSchema = require("../../schema/user/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("../../environment/app/env.json");

router.route("/login").post(async (req, res) => {
  let getUser = await UserSchema.findOne({ email: req.body.email });

  if (getUser == null) {
    res.status(502).json({ message: "User doesn't exist", success: false });
  }

  if (getUser.password.length > 0) {
    bcrypt.compare(req.body.password, getUser.password, (err, verified) => {
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
        } = getUser;
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
        res.status(502).json({ message: "Password is wrong", success: false });
      }
    });
  }
});

router.route("/register").post(async (req, res) => {
  try {
    var salt = await bcrypt.genSalt();
    var hashedPassword = await bcrypt.hash(req.body.password, salt);
  } catch (err) {
    res.status(500).json(err);
  }

  try {
    let getUser = await UserSchema.findOne({ email: req.body.email });

    if (getUser) {
      res
        .status(502)
        .json({ message: "Email is already registered", success: false });
    }

    const User = new UserSchema({
      email: req.body.email,
      password: hashedPassword,
      interest: req.body.interest,
      role: req.body.role,
    }).save(function (err, user) {
      const { email, interest, role, _id } = user;
      const access_token = jwt.sign(
        { email, interest, role, _id },
        env.ACCESS_TOKEN,
        {
          expiresIn: "12h",
        }
      );
      res.status(200).json({
        message: "Successfuly",
        success: true,
        access_token: access_token,
      });
    });
  } catch (err) {
    res.status(502).json(err);
  }
});

module.exports = router;

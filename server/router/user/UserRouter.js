const router = require("express").Router();
const UserSchema = require("../../schema/user/UserSchema");
const jwt = require("jsonwebtoken");
const env = require("../../env.json");
const bcrypt = require("bcrypt");
const loginMiddleware = require("../../middlewares/LoginMiddleware");

router.route("/login").post(async (req, res) => {
  UserSchema.findOne({ email: req.body.email }).then((result) => {
    if (result == null) {
      res.json({ message: "User doesn't exist", success: false });
    } else if (result.password.length > 0) {
      bcrypt.compare(req.body.password, result.password, (err, verified) => {
        if (verified) {
          const { email, firstName, lastName, fullName, interest } = result;
          const access_token = jwt.sign(
            { email, firstName, lastName, fullName, interest },
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
    } else {
      res.json("1");
    }
  });
});

router.route("/register").post(async (req, res) => {
  try {
    var salt = await bcrypt.genSalt();
    var hashedPassword = await bcrypt.hash(req.body.password, salt);
  } catch (err) {
    res.status(500).json(err);
  }

  try {
    UserSchema.findOne({ email: req.body.email }).then((result) => {
      if (result) {
        res.json("Email is already registered");
      } else {
        const { email } = req.body;
        const access_token = jwt.sign({ email }, env.ACCESS_TOKEN, {
          expiresIn: "12h",
        });
        const User = new UserSchema({
          email: req.body.email,
          password: hashedPassword,
          interest: req.body.interest,
        }).save();
        res.json({ success: true, access_token: access_token });
      }
    });
  } catch (err) {
    res.json(err);
  }
});

router
  .route("/update/user/info")
  .all(loginMiddleware)
  .post(async (req, res) => {
    UserSchema.findOne({ email: req.email }).then((result) => {
      try {
        const { fullName, phone, socialNetwork, firstName, lastName } =
          req.body;
        const access_token = jwt.sign(
          { fullName, phone, socialNetwork, firstName, lastName },
          env.ACCESS_TOKEN,
          {
            expiresIn: "12h",
          }
        );
        result.fullName = req.body.fullName;
        result.phone = req.body.phone;
        result.socialNetwork = req.body.socialNetwork;
        result.firstName = req.body.firstName;
        result.lastName = req.body.lastName;
        result.save();
        res.json({ success: true, access_token: access_token });
      } catch (err) {
        res.json(err);
      }
    });
  });

module.exports = router;

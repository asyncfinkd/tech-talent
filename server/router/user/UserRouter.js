const router = require("express").Router();
const UserSchema = require("../../schema/user/UserSchema");
const jwt = require("jsonwebtoken");
const env = require("../../env.json");
const bcrypt = require("bcrypt");
const loginMiddleware = require("../../middlewares/LoginMiddleware");
const nodemailer = require("nodemailer");

router.route("/login").post(async (req, res) => {
  UserSchema.findOne({ email: req.body.email }).then((result) => {
    if (result == null) {
      res.json({ message: "User doesn't exist", success: false });
    } else if (result.password.length > 0) {
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
            },
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
        const { email, interest, role } = req.body;
        const access_token = jwt.sign(
          { email, interest, role },
          env.ACCESS_TOKEN,
          {
            expiresIn: "12h",
          }
        );
        const User = new UserSchema({
          email: req.body.email,
          password: hashedPassword,
          interest: req.body.interest,
          role: req.body.role,
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
        const { fullName, phone, socialNetwork, firstName, lastName, role } =
          req.body;
        const { email, interest, _id } = req;
        const access_token = jwt.sign(
          {
            fullName,
            phone,
            socialNetwork,
            firstName,
            lastName,
            email,
            interest,
            role,
            _id,
          },
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

router.route("/forgot").post(async (req, res) => {
  const num = Math.random().toString(36).substring(2);

  try {
    var salt = await bcrypt.genSalt();
    var hashedPassword = await bcrypt.hash(num, salt);
  } catch (err) {
    res.status(500).json(err);
  }

  UserSchema.findOne({ email: req.body.email }).then((result) => {
    if (result == null) {
      res.json("Email does not exist");
    } else {
      result.password = hashedPassword;
      result.save();

      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: `${env.user}`,
          pass: `${env.pass}`,
        },
      });

      let mailOptions = {
        from: `${env.user}`,
        to: req.body.email,
        subject: "Forgot password? | Tech Talent",
        html: `
        <h1>Hello.</h1>
        <p>This is your password: <strong>${num}</strong></p>
        
        <p>We hope you enjoy our platform,</p>
        <b>Tech Talent</b>`,
      };

      transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
          console.log("error occurs: ", err);
        } else {
          console.log("email sent");
        }
      });
      res.json({ success: true });
    }
  });
});

router
  .route("/security")
  .all(loginMiddleware)
  .post(async (req, res) => {
    try {
      var salt = await bcrypt.genSalt();
      var hashedPassword = await bcrypt.hash(req.body.newPassword, salt);
    } catch (err) {
      res.status(500).json(err);
    }

    UserSchema.findOne({ email: req.email }).then((result) => {
      bcrypt.compare(req.body.password, result.password, (err, verified) => {
        if (verified) {
          result.password = hashedPassword;
          result.save();

          res.json("Success");
        } else {
          res.json("Incorrect current password");
        }
      });
    });
  });

module.exports = router;

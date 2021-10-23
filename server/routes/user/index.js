const router = require("express").Router();
const UserSchema = require("../../schema/user/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("../../environment/app/env.json");
const loginMiddleware = require("../../middlewares/loginMiddleware");
const AdminSchema = require("../../schema/admin/index");

router.route("/login").post(async (req, res) => {
  if (req.body.forUser) {
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
          const logged = true;
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
              logged,
            },
            env.ACCESS_TOKEN,
            {
              expiresIn: "12h",
            }
          );
          res.status(200).json({ success: true, access_token: access_token });
        } else {
          res
            .status(502)
            .json({ message: "Password is wrong", success: false });
        }
      });
    }
  } else {
      let getUser = await AdminSchema.findOne({ email: req.body.email });

      if (getUser == null) {
        res.status(502).json({ message: "User doesn't exist", success: false });
      }
  
      if (getUser.password.length > 0) {
        bcrypt.compare(req.body.password, getUser.password, (err, verified) => {
          if (verified) {
            const {
              email,
              fullName,
              role,
            } = getUser;
            const logged = true;
            const access_token = jwt.sign(
              {
                email,
                fullName,
                role,
                logged,
              },
              env.ACCESS_TOKEN,
              {
                expiresIn: "12h",
              }
            );
            res.status(200).json({ success: true, access_token: access_token });
          } else {
            res
              .status(502)
              .json({ message: "Password is wrong", success: false });
          }
        });
      }
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
    UserSchema.findOne({ email: req.body.email }).then((result) => {
      if (result) {
        res
          .status(502)
          .json({ message: "Email is already registered", success: false });
      } else {
        const User = new UserSchema({
          email: req.body.email,
          password: hashedPassword,
          interest: req.body.interest,
          role: req.body.role,
        }).save(function (err, user) {
          const { email, interest, role, _id } = user;
          const logged = true;
          const access_token = jwt.sign(
            { email, interest, role, _id, logged },
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
      }
    });
  } catch (err) {
    res.status(502).json(err);
  }
});

router
  .route("/register/second/step")
  .all(loginMiddleware)
  .post(async (req, res) => {
    UserSchema.findOne({ email: req.email }).then((result) => {
      try {
        const { fullName, phone, socialNetwork } = req.body;
        const { email, interest, _id, role } = req;
        const logged = true;
        const access_token = jwt.sign(
          {
            fullName,
            phone,
            socialNetwork,
            email,
            interest,
            role,
            _id,
            logged,
          },
          env.ACCESS_TOKEN,
          {
            expiresIn: "12h",
          }
        );
        result.fullName = req.body.fullName;
        result.phone = req.body.phone;
        result.socialNetwork = req.body.socialNetwork;
        result.save();
        res.json({
          message: "Successfuly",
          success: true,
          access_token: access_token,
        });
      } catch (err) {
        res.status(502).json(err);
      }
    });
  });

router
  .route("/check/logged")
  .all(loginMiddleware)
  .post(async (req, res) => {
    res.status(200).json({ message: "Member is logged", success: true });
  });

router
  .route("/update/profile/information")
  .all(loginMiddleware)
  .post(async (req, res) => {
    UserSchema.findOne({ emai: req.email }).then((result) => {
      try {
        const { fullName, phone, socialNetwork } = req.body;
        const { email, interest, _id, role } = req;
        const logged = true;
        const access_token = jwt.sign(
          {
            fullName,
            phone,
            socialNetwork,
            email,
            interest,
            role,
            _id,
            logged,
          },
          env.ACCESS_TOKEN,
          { expiresIn: "12h" }
        );

        result.fullName = fullName;
        result.phone = phone;
        result.socialNetwork = socialNetwork;
        result.save();

        res.status(200).json({
          message: "Successfuly",
          success: true,
          access_token: access_token,
        });
      } catch (err) {
        res.status(502).json(err);
      }
    });
  });

module.exports = router;

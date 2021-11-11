const router = require("express").Router();
const CompaniesSchema = require("../../schema/companies");
const UserSchema = require("../../schema/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("../../environment/app/env.json");
const path = require("path");

router.route("/check/registered").post(async (req, res) => {
  try {
    UserSchema.find({ email: req.body.email }).then((result) => {
      if (result.length > 0) {
        res
          .status(502)
          .json({ message: "Email is already registered", success: false });
      } else {
        res
          .status(200)
          .json({ message: "User is not registered", success: true });
      }
    });
  } catch (err) {
    res.json(err);
  }
});

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
        const dir = path.join(__dirname, "../../public/images/");

        let image = "";
        if (req.body.logo) {
          let base64Data = req.body.logo.replace(
            /^data:image\/\w+;base64,/,
            ""
          );

          image = `${req.body.companyName}_img.jpg`;

          require("fs").writeFile(
            `${dir}${req.body.companyName}_img.jpg`,
            base64Data,
            "base64",
            function (err) {}
          );
        }
        const Companies = new CompaniesSchema({
          name: req.body.companyName,
          approved: false,
          logoUrl: `public/images/${image}`,
        }).save(function (err, user) {
          const User = new UserSchema({
            email: req.body.email,
            password: hashedPassword,
            interest: null,
            role: "manager",
            myCompany: user._id,
            followedCompaniesId: null,
            followedEdusId: null,
            fullName: req.body.fullName,
            socialNetwork: "",
            phone: "",
          }).save(function (err, newUser) {
            const {
              email,
              role,
              _id,
              myCompany,
              fullName,
              phone,
              socialNetwork,
            } = newUser;
            const logged = true;
            const access_token = jwt.sign(
              {
                email,
                role,
                _id,
                logged,
                myCompany,
                fullName,
                phone,
                socialNetwork,
              },
              env.ACCESS_TOKEN,
              { expiresIn: "12h" }
            );
            res.status(200).json({
              message: "Successfuly",
              success: true,
              access_token: access_token,
            });
          });
        });
      }
    });
  } catch (err) {
    res.status(502).json(err);
  }
});

module.exports = router;

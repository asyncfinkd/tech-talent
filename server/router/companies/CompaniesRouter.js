const router = require("express").Router();
const CompaniesSchema = require("../../schema/companies/CompaniesSchema");
const UserSchema = require("../../schema/user/UserSchema");
const loginMiddleware = require("../../middlewares/LoginMiddleware");

router.route("/get/companies").get(async (req, res) => {
  CompaniesSchema.find().then((result) => {
    res.json(result);
  });
});

router
  .route("/follow/companies")
  .all(loginMiddleware)
  .post(async (req, res) => {
    CompaniesSchema.findOne({ _id: req.body.id }).then((result) => {
      // is already followed register write next time!
      let newFollower = result.followedUsersId || [];
      newFollower.push({ id: req._id });
      result.followedUsersId = newFollower;
      result.save();
    });
    UserSchema.findOne({ _id: req._id }).then((result) => {
      // is already followed register write next time!
      CompaniesSchema.findOne({ _id: req.body.id }).then((result2) => {
        let newFollower = result.followedCompaniesId || [];
        newFollower.push({ id: result2._id });
        result.followedCompaniesId = newFollower;
        result.save();
      });
    });
    res.json("success");
  });

router
  .route("/unfollow/companies")
  .all(loginMiddleware)
  .post(async (req, res) => {
    CompaniesSchema.findOne({ _id: req.body.id }).then((result) => {
      result.followedUsersId.map((item) => {
        if (item.id == req._id) {
          item.remove();
        }
        result.save();
      });
    });
    res.json("success");
  });

router.route("/get/companies/:id").get(async (req, res) => {
  CompaniesSchema.find().then((result) => {
    let data = [];
    result.map((item) => {
      if (item.slug.toString() == req.params.id.toString()) {
        data.push(item);
      }
    });
    res.json(data);
  });
});

module.exports = router;

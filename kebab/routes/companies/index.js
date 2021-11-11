const router = require("express").Router();
const CompaniesSchema = require("../../schema/companies/index");
const loginMiddleware = require("../../middlewares/loginMiddleware");
const UserSchema = require("../../schema/user/index");

router.route("/get/companies").get(async (req, res) => {
  CompaniesSchema.find().then((result) => {
    let data = [];
    result.map((item) => {
      if (item.approved) {
        data.push(item);
      }
    });

    res.status(200).json(data);
  });
});

router.route("/get/companies/:id").get(async (req, res) => {
  CompaniesSchema.find().then((result) => {
    let data = [];
    result.map((item) => {
      if (item.slug == req.params.id.toString()) {
        data.push(item);
      }
    });
    res.json(data);
  });
});

router
  .route("/follow/companies")
  .all(loginMiddleware)
  .post(async (req, res) => {
    CompaniesSchema.findOne({ _id: req.body.id }).then((result) => {
      let newFollower = result.followedUsersId || [];
      newFollower.push({ id: req._id });
      result.followedUsersId = newFollower;
      result.save();
    });
    UserSchema.findOne({ _id: req._id }).then((result) => {
      CompaniesSchema.findOne({ _id: req.body.id }).then((result2) => {
        let newFollower = result.followedCompaniesId || [];
        newFollower.push({ id: result2._id });
        result.followedCompaniesId = newFollower;
        result.save();
      });
    });
    res.json({ success: true });
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
    CompaniesSchema.findOne({ _id: req.body.id }).then((result) => {
      UserSchema.findOne({ _id: req._id }).then((result2) => {
        result2.followedCompaniesId.map((item) => {
          if (result._id == item.id) {
            item.remove();
          }
          result2.save();
        });
      });
    });
    res.json({ success: true });
  });

module.exports = router;

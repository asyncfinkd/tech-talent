const router = require("express").Router();
const LoginMiddleware = require("../../middlewares/LoginMiddleware");
const EduSchema = require("../../schema/edu/EduSchema");
const UserSchema = require("../../schema/user/UserSchema");

router.route("/get/edu").post(async (req, res) => {
  EduSchema.find().then((result) => {
    res.json(result);
  });
});

router
  .route("/follow/edus")
  .all(LoginMiddleware)
  .post(async (req, res) => {
    EduSchema.findOne({ _id: req.body.id }).then((result) => {
      let newFollower = result.followedUsersId || [];
      newFollower.push({ id: req._id });
      result.followedUsersId = newFollower;
      result.save();
    });
    UserSchema.findOne({ _id: req._id }).then((result) => {
      EduSchema.findOne({ _id: req.body.id }).then((result2) => {
        let newFollower = result.followedEdusId || [];
        newFollower.push({ id: result2._id });
        result.followedEdusId = newFollower;
        result.save();
      });
    });
    res.json("success");
  });

router
  .route("/unfollow/edus")
  .all(LoginMiddleware)
  .post(async (req, res) => {
    EduSchema.findOne({ _id: req.body.id }).then((result) => {
      result.followedUsersId.map((item) => {
        if (item.id == req._id) {
          item.remove();
        }
        result.save();
      });
    });
    EduSchema.findOne({ _id: req.body.id }).then((result) => {
      UserSchema.findOne({ _id: req._id }).then((result2) => {
        result2.followedEdusId.map((item) => {
          if (result._id == item.id) {
            item.remove();
          }
          result2.save();
        });
      });
    });
    res.json("success");
  });

module.exports = router;

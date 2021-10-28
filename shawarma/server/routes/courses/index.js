const router = require("express").Router();
const CoursesSchema = require("../../schema/courses/index");

router.route("/get/courses").post(async (req, res) => {
  CoursesSchema.find().then((result) => {
    res.status(200).json(result);
  });
});

module.exports = router;

const router = require("express").Router();
const CoursesSchema = require("../../schema/courses/CoursesSchema");

router.route("/get/courses").post(async (req, res) => {
  CoursesSchema.find().then((result) => {
    res.json(result);
  });
});

module.exports = router;

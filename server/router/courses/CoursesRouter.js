const router = require("express").Router();
const CoursesSchema = require("../../schema/courses/CoursesSchema");

router.route("/get/courses").post(async (req, res) => {
  CoursesSchema.find().then((result) => {
    res.json(result);
  });
});

router.route("/get/courses/:type").get(async (req, res) => {
  CoursesSchema.find().then((result) => {
    let data = [];
    result.map((item) => {
      if (req.params.type == item.field.slug) {
        data.push(item);
      }
    });
    res.json(data);
  });
});

module.exports = router;

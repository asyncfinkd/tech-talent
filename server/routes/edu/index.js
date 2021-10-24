const router = require("express").Router();
const EduSchema = require("../../schema/edu/index");
const CoursesSchema = require("../../schema/courses/index");

router.route("/get/edu").get(async (req, res) => {
  EduSchema.find().then((result) => {
    res.status(200).json(result);
  });
});

router.route("/get/edu/:id").get(async (req, res) => {
  EduSchema.find().then((result) => {
    let data = [];
    result.map((item) => {
      if (item.slug.toString() == req.params.id.toString()) {
        data.push(item);
      }
    });
    res.status(200).json(data);
  });
});

router.route("/get/edu/posts").post(async (req, res) => {
  console.log(req.body.id);
  EduSchema.findOne({ _id: req.body.id }).then((result) => {
    CoursesSchema.find().then((result2) => {
      let data = [];
      if (result.coursesId.length != 0) {
        result?.coursesId?.map((item) => {
          result2.map((item2) => {
            if (item.id == item2._id) {
              data.push(item2);
            }
          });
        });
      }
      res.json(data);
    });
  });
});

module.exports = router;

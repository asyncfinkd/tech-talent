const router = require("express").Router();
const EduSchema = require("../../schema/edu/index");

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

module.exports = router;

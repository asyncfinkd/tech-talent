const router = require("express").Router();
const EduSchema = require("../../schema/edu/index");

router.route("/get/edu").get(async (req, res) => {
  EduSchema.find().then((result) => {
    res.status(200).json(result);
  });
});

module.exports = router;

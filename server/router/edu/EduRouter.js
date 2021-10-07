const router = require("express").Router();
const EduSchema = require("../../schema/edu/EduSchema");

router.route("/get/edu").post(async (req, res) => {
  EduSchema.find().then((result) => {
    res.json(result);
  });
});

module.exports = router;

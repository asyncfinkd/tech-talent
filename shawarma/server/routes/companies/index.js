const router = require("express").Router();
const CompaniesSchema = require("../../schema/companies/index");

router.route("/get/companies").get(async (req, res) => {
  CompaniesSchema.find().then((result) => {
    res.status(200).json(result);
  });
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

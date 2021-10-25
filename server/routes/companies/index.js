const router = require("express").Router();
const CompaniesSchema = require("../../schema/companies/index");

router.route("/get/companies").get(async (req, res) => {
  CompaniesSchema.find().then((result) => {
    res.status(200).json(result);
  });
});

module.exports = router;

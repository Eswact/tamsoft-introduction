const db = require("../models");
const languages = db.languages;

const VerifyToken = async (req, res) => {
  //auth middleware
  res.json({ valid: true });
}

const AboutCompanyInfos = async (req, res) => {
  try {
    const thisLanguage = await languages.findOne({ name: req.params.name });
    // const updatedData = req.body.companyInfos;
    // const thisLanguage = await languages.findOneAndUpdate(
    //   { name: req.params.name },
    //   { $set: { 'data.aboutPage.companyInfos': updatedData } },
    //   { new: true }
    // );
    if (thisLanguage) {
      res.json(thisLanguage);
    } else {
      res.status(404).send({ message: "Language not found." });
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "Some error occurred while retrieving the language." });
  }
};

module.exports = {
    VerifyToken,
    AboutCompanyInfos
};
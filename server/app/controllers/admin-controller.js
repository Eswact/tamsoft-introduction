const db = require("../models");
const languages = db.languages;

const aboutCompanyInfos = async (req, res) => {
  try {
    const thisLanguage = await languages.findOne({ name: req.params.name });
    if (thisLanguage) {
      res.json(thisLanguage.data.aboutPage.companyInfos);
      //update
    } else {
      res.status(404).send({ message: "Language not found." });
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "Some error occurred while retrieving the language." });
  }
};

module.exports = {
    aboutCompanyInfos
};
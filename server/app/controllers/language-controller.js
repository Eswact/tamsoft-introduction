const db = require("../models");
const languages = db.languages;

// Get all languages from the database.
const findAll = async (req, res) => {
  try {
    const languagesData = await languages.find();
    res.json(languagesData);
  } catch (error) {
    res.status(500).send({ message: error.message || "Some error occurred while retrieving languages." });
  }
};

const findLanguageByName = async (req, res) => {
  try {
    const languageData = await languages.findOne({ name: req.params.name });
    if (languageData) {
      res.json(languageData.data);
    } else {
      res.status(404).send({ message: "Language not found." });
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "Some error occurred while retrieving the language." });
  }
};

module.exports = {
    findAll,
    findLanguageByName
};
  
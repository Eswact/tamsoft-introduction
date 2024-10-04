const path = require('path');
const fs = require('fs');
const db = require("../models");
const languages = db.languages;

const VerifyToken = async (req, res) => {
  //auth middleware
  res.json({ valid: true });
}

const UpdateWithPath = async (req, res) => {
  try {
    const thisLanguage = await languages.findOne({ name: req.params.name });
    const updateData = req.body.data;
    const updatePath = req.body.path;
    if (thisLanguage) {
      if (updatePath && updateData) {
        const thisLanguage = await languages.findOneAndUpdate(
          { name: req.params.name },
          { $set: { [`data.${updatePath}`]: updateData } },
          { new: true }
        );
        res.json(thisLanguage);
      }
      else {
        res.status(415).send({ message: "Data is incomplete or incorrectly sent." });
      }
    } else {
      res.status(404).send({ message: "Language not found." });
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "Some error occurred while update." });
  }
};

const addImages2Upload = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'Dosyalar eksik veya hatalı.' });
    }

    const uploadPath = req.body.path;
    const finalUploadPath = uploadPath ? path.join(__dirname, `../../uploads/images/${uploadPath}`) : path.join(__dirname, '../../uploads/images/');

    if (!fs.existsSync(finalUploadPath)) {
      fs.mkdirSync(finalUploadPath, { recursive: true });
    }

    req.files.forEach((file) => {
      const filePath = path.join(finalUploadPath, file.originalname);
      fs.writeFileSync(filePath, file.buffer);
    });

    res.status(200).json({ message: 'Resimler başarıyla kaydedildi.' });
  } catch (error) {
    console.error('Resim kaydetme hatası:', error);
    res.status(500).json({ error: 'Bir hata oluştu, resimler kaydedilemedi.' });
  }
};

module.exports = {
    VerifyToken,
    UpdateWithPath,
    addImages2Upload
};
const jwt = require('jsonwebtoken');
const Language = require('../models/language-model');
const path = require('path');
const fs = require('fs');

const login = async (req, res) => {
    const { username, password } = req.body;

    if (username !== process.env.ADMIN_USERNAME || password !== process.env.ADMIN_PASSWORD) {
        return res.status(401).json({ message: 'Kullanıcı adı veya şifre hatalı.' });
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '8h' });
    res.json({ token });
};

const getLanguages = async (req, res) => {
    try {
        const languages = await Language.find({});
        const result = {};
        languages.forEach(lang => {
            result[lang.name] = lang.data;
        });
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: 'Dil verileri alınamadı.', error: err.message });
    }
};

const updateLanguage = async (req, res) => {
    const { name } = req.params;
    const { data } = req.body;

    if (!data || typeof data !== 'object') {
        return res.status(400).json({ message: 'Geçersiz veri.' });
    }

    try {
        const result = await Language.findOneAndUpdate(
            { name },
            { $set: { data, updatedAt: new Date() } },
            { new: true, upsert: true }
        );
        res.json({ message: `${name} dili güncellendi.`, language: result });
    } catch (err) {
        res.status(500).json({ message: 'Güncelleme başarısız.', error: err.message });
    }
};

const uploadImage = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'Dosya bulunamadı.' });
    }

    const uploadsDir = path.join(__dirname, '../../uploads');
    if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const filename = `${Date.now()}-${req.file.originalname.replace(/\s/g, '_')}`;
    const filepath = path.join(uploadsDir, filename);

    fs.writeFileSync(filepath, req.file.buffer);

    res.json({ url: `/uploads/${filename}`, filename });
};

const getImages = async (req, res) => {
    const uploadsDir = path.join(__dirname, '../../uploads');
    if (!fs.existsSync(uploadsDir)) {
        return res.json({ images: [] });
    }

    const files = fs.readdirSync(uploadsDir).map(filename => ({
        filename,
        url: `/uploads/${filename}`
    }));

    res.json({ images: files });
};

module.exports = { login, getLanguages, updateLanguage, uploadImage, getImages };

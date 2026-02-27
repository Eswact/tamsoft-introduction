const Language = require('../models/language-model');

const getLanguages = async (req, res) => {
    try {
        const languages = await Language.find({});
        const result = {};
        languages.forEach(lang => {
            result[lang.name] = lang.data;
        });
        res.json(result);
    } catch (error) {
        console.error('Language fetch error:', error);
        res.status(500).json({ message: error.message || 'Failed to fetch languages.' });
    }
};

module.exports = { getLanguages };

const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    data: { type: mongoose.Schema.Types.Mixed, required: true },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Language', languageSchema, 'languages');

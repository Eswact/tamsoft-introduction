const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const dbConfig = require('./app/config/db-config.js');
const Language = require('./app/models/language-model');

const seed = async () => {
    await mongoose.connect(dbConfig.url);
    console.log('MongoDB bağlantısı kuruldu.');

    const localesDir = path.join(__dirname, '../client/src/locales');
    const locales = ['tr', 'en'];

    for (const locale of locales) {
        const filePath = path.join(localesDir, `${locale}.json`);
        if (!fs.existsSync(filePath)) {
            console.log(`${locale}.json bulunamadı, atlanıyor.`);
            continue;
        }
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        await Language.findOneAndUpdate(
            { name: locale },
            { $set: { name: locale, data, updatedAt: new Date() } },
            { upsert: true, new: true }
        );
        console.log(`✓ ${locale} dili MongoDB'ye aktarıldı.`);
    }

    await mongoose.disconnect();
    console.log('Tamamlandı.');
    process.exit(0);
};

seed().catch(err => {
    console.error('Seed hatası:', err);
    process.exit(1);
});

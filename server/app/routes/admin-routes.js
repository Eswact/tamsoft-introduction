const adminController = require('../controllers/admin-controller');
const adminAuth = require('../middleware/admin-auth');

module.exports = [
    { method: 'post', path: 'login', func: adminController.login },
    { method: 'get', path: 'languages', func: [adminAuth, adminController.getLanguages] },
    { method: 'put', path: 'languages/:name', func: [adminAuth, adminController.updateLanguage] },
    { method: 'file', path: 'upload', func: [adminAuth, adminController.uploadImage] },
    { method: 'get', path: 'images', func: [adminAuth, adminController.getImages] },
];

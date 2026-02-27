const language = require('../controllers/language-controller.js');

const endpoints = [
    { method: 'get', path: 'getLanguages', func: language.getLanguages },
];

module.exports = endpoints;

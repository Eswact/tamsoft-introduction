const language = require("../controllers/language-controller.js");
const endpoints= [
    { method: "get", path: "languages", func: language.findAll },
    { method: "post", path: "findLanguage/:name", func: language.findLanguageByName }
]

module.exports = endpoints;
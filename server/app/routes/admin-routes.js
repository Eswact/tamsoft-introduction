const admin = require("../controllers/admin-controller.js");
const endpoints= [
    { method: "get", path: "languages", func: admin.findAll },
    { method: "post", path: "findLanguage/:name", func: admin.findLanguageByName }
]

module.exports = endpoints;
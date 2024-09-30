const admin = require("../controllers/admin-controller.js");
const endpoints= [
    { method: "post", path: "aboutCompanyInfos/:name", func: admin.aboutCompanyInfos }
]

module.exports = endpoints;
const admin = require("../controllers/admin-controller.js");
const endpoints= [
    { method: "post", path: "VerifyToken", func: admin.VerifyToken },
    { method: "post", path: "AboutCompanyInfos/:name", func: admin.AboutCompanyInfos }
]

module.exports = endpoints;
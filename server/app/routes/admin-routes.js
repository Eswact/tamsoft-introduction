const admin = require("../controllers/admin-controller.js");
const endpoints= [
    { method: "post", path: "verifyToken", func: admin.VerifyToken },
    { method: "post", path: "updateWithPath/:name", func: admin.UpdateWithPath },
    { method: "file", path: "uploadImages", func: admin.addImages2Upload }
]

module.exports = endpoints;
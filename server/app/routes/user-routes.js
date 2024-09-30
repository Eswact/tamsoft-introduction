const user = require("../controllers/user-controller.js");
const endpoints= [  
    { method: "post", path: "login", func: user.login },
    // { method: "post", path: "register", func: user.register },
]

module.exports = endpoints;
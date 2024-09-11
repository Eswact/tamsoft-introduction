const contact = require("../controllers/contact-controller.js");
const endpoints= [  
    { method: "post", path: "sendMail", func: contact.sendMail },
]

module.exports = endpoints;
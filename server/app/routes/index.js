const express = require("express");
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();
const contactRoutes = require("./contact-routes");
const adminRoutes = require("./admin-routes");

chooseMethod = (method, path, func) => { 
    switch (method) {
        case "get":
            router.get(path, func);
            break;
        case "post":
            router.post(path, func);
            break;
        case "file":
            router.post(path, upload.single('file'), func);
            break;
        case "put":
            router.put(path, func);
            break;
        case "delete":
            router.delete(path, func);
            break;
        default:
            break;
    }
}

contactRoutes.forEach(({ method, path, func }) => {
    chooseMethod(method, `/contact/${path}`, func);
});
adminRoutes.forEach(({ method, path, func }) => {
    chooseMethod(method, `/admin/${path}`, func);
});

module.exports = router;
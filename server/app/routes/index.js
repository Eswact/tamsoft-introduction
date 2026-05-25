const express = require("express");
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();
const contactRoutes = require("./contact-routes");
const languageRoutes = require("./language-routes");
const adminRoutes = require("./admin-routes");

const toHandlers = (func) => Array.isArray(func) ? func : [func];

chooseMethod = (method, path, func) => {
    const handlers = toHandlers(func);
    switch (method) {
        case "get":
            router.get(path, ...handlers);
            break;
        case "post":
            router.post(path, ...handlers);
            break;
        case "file":
            router.post(path, upload.single('file'), ...handlers);
            break;
        case "put":
            router.put(path, ...handlers);
            break;
        case "delete":
            router.delete(path, ...handlers);
            break;
        default:
            break;
    }
}

contactRoutes.forEach(({ method, path, func }) => {
    chooseMethod(method, `/contact/${path}`, func);
});

languageRoutes.forEach(({ method, path, func }) => {
    chooseMethod(method, `/language/${path}`, func);
});

adminRoutes.forEach(({ method, path, func }) => {
    chooseMethod(method, `/admin/${path}`, func);
});

module.exports = router;

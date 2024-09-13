const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

const corsOptions = {
  origin: ['http://localhost:3752'],
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set port & listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// route
app.get("/", (req, res) => { res.json({ message: "Welcome to Server." }); });
app.use("/api", require("./app/routes/index.js"));
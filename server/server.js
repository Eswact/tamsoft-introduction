const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const dbConfig = require("./app/config/db-config.js");
mongoose.connect(dbConfig.url)
  .then(() => console.log("Connected to MongoDB."))
  .catch(err => console.error("MongoDB connection error:", err));

const app = express();

const corsOptions = {
  origin: ['http://localhost:3752', 'http://localhost:5173'],
};
app.use(cors(corsOptions));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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
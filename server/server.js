const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const session = require('express-session');
require("dotenv").config();

const app = express();

const corsOptions = {
  origin: ['http://localhost:3752', 'http://localhost:3072'],
  credentials: true
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// show uploads static file
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// set port & listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// db connection
const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


// cookie & session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  // store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }), // MongoDB'de sakla
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60 * 1 // 1 hour
  }
}));

// route
app.get("/", (req, res) => { res.json({ message: "Welcome to Server." }); });
app.use("/api", require("./app/routes/index.js"));
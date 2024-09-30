const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const mailsender = require("../services/mail-sender");
const db = require("../models");
const User = db.users;

const login = async (req, res) => {
  const { mail, password } = req.body;

  try {
    const user = await User.findOne({ mail });
    if (!user) {
      res.status(400).json({ message: "Invalid mail or password" });
      return;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid mail or password" });
      return;
    }
    const isConfirmed = user.mailConfirmed;
    if (!isConfirmed) {
      res.status(400).json({ message: "Mail not confirmed" });
      return;
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message || "Something went wrong" });
  }
};

// const register = async (req, res) => {
//   const { username, password, mail } = req.body;
//   const usersData = await User.find();
//   const mailOrUsernameExists = usersData.find(x => x.mail === mail || x.username === username);
//   if (mailOrUsernameExists) {
//     res.status(400).json({ message: "Username or mail already exists" });
//     return;
//   }
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const mailConfirmed = true; // false
//     const newUser = new User({ username, password: hashedPassword, mail, mailConfirmed });
//     await newUser.save();

//     // const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
//     // const verificationUrl = `${process.env.CONFIRM_URL}?verify=${token}`;
//     // await mailsender.sendVerificationMail(newUser, verificationUrl);

//     res.status(201).json({ message: "User created successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message || "Something went wrong" });
//   }
// };

// const verifyEmail = async (req, res) => {
//   const token = req.body.token;
//   if (!token) {
//     res.status(400).json({ message: "Invalid token" });
//     return;
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(decoded.id);
//     if (!user) {
//       res.status(400).json({ message: "User not found" });
//       return;
//     }
//     user.mailConfirmed = true;
//     await user.save();
//     res.status(200).json({ message: "Email successfully verified" });
//   } catch (err) {
//     res.status(500).json({ message: err.message || "Something went wrong" });
//   }
// };

module.exports = {
  login,
  // register,
  //verifyEmail,
};
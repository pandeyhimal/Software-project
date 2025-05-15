const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
// const bcrypt = require("bcrypt");
const path = require("path");
const fs = require("fs");

const User = require('./models/user'); // Only use this, remove in-file schema declaration

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads")); // Serve uploaded files

// Static files (to serve login.html, dashboard.html, etc.)
app.use(express.static(path.join(__dirname))); // <-- Add this

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/registrationDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "./uploads";
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });

// Registration Route
app.post("/api/register", (req, res) => {
  upload.single("photo")(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      console.error("Multer error:", err);
      return res.status(400).json({ message: "File upload error: " + err.message });
    } else if (err) {
      console.error("Unknown error:", err);
      return res.status(500).json({ message: "Server error" });
    }

    try {
      const {
        firstName, middleName, lastName, dob, email,gender, contact,
        address, faculty, department, semester, currentYear, startYear,
        endYear, username, password
      } = req.body;

      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }

      //   const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        firstName,
        middleName,
        lastName,
        dob,
        email,
        gender,
        contact,
        address,
        faculty,
        department,
        // semester: faculty === "BICTE" ? semester : undefined,
        // currentYear: faculty !== "BICTE" ? currentYear : undefined,
        startYear,
        endYear,
        username,
        // password: hashedPassword,
        password,
        photo: req.file ? req.file.path : ""
      });

      await newUser.save();
      res.status(201).json({ message: "Registration successful!" });
      // res.redirect("login.html");
      return;
    } catch (err) {
      console.error("Registration error:", err);
      res.status(500).json({ message: "Error registering user!" });
    }
  });
});

// Admin route to fetch users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error("Fetch users error:", err);
    res.status(500).json({ message: "Error fetching users!" });
  }
});

// Login Route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log("Username:", username);  // Debugging line


  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password!' });
  }

  //   const isMatch = await bcrypt.compare(password, user.password);
  //   if (!isMatch) {
  //     console.log("Password mismatch");
  //     return res.status(401).json({ message: 'Invalid username or password' });
  //   }

  if (user.password !== password) {
    console.log("mismatch", password);
    return res.status(401).json({ message: 'Invalid username or password!' });
  }

  // Send user data or redirect logic (frontend should handle redirect)
  res.status(200).json({ message: 'Login successful!', username: user.username, email: user.email });
});


//  fetch and display that data on your profile page
app.get('/api/user/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Start server (only ONCE)
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}!`);
});


// Delete user by ID
app.delete('/api/users/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

// Update user by ID
app.put('/api/users/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true } // Return the updated document
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
});

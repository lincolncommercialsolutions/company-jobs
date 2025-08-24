const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// File storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });

// Route for handling job applications
app.post("/apply", upload.single("resume"), (req, res) => {
  console.log("Applicant Info:", req.body);
  console.log("Uploaded File:", req.file);
  res.json({ status: "success" });
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));

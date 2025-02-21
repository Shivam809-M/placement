const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// POST Route: /bfhl
app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Invalid data format" });
    }

    const numbers = data.filter((item) => !isNaN(item));
    const alphabets = data.filter((item) => isNaN(item));
    const highest_alphabet = alphabets.length ? [alphabets.sort().reverse()[0]] : [];

    res.json({
      is_success: true,
      user_id: "shivam809",
      email: "malhotrashivam809@gmail.com",
      roll_number: "23bcs80044",
      numbers,
      alphabets,
      highest_alphabet
    });
  } catch (error) {
    res.status(500).json({ is_success: false, message: "Server Error" });
  }
});

// GET Route: /bfhl
app.get("/bfhl", (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

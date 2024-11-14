require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected successfully");
}).catch((error) => {
  console.error("MongoDB connection error:", error);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require("express");
require("dotenv").config(); // Load environment variables
const cors = require("cors");
const connectDB = require("./config/db"); // Import connectDB function
const authRoutes = require("./routes/userRoutes");

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/*const express = require("express");
const cors = require("cors");

// Import Routes
const menuRoutes = require("./routes/menuRoutes");
const vendorRoutes = require("./routes/vendorRoutes");

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/menu", menuRoutes);
app.use("/api/vendor", vendorRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});*/

/*const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Import Routes
const menuRoutes = require("./routes/menuRoutes");
const vendorRoutes = require("./routes/vendorRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Connect to MongoDB


const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error: ", error);
    setTimeout(connectToDatabase, 3000); // Retry after 3 seconds if connection fails
  }
};

connectToDatabase();


// Routes
app.use("/api/menu", menuRoutes);
app.use("/api/vendor", vendorRoutes);
app.use("/api/auth", authRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error("Error stack trace:", err);
  res.status(500).json({
    success: false,
    error: err.message || "Internal Server Error",
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});*/

/*
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

// Import Routes
const menuRoutes = require("./routes/menuRoutes");
const vendorRoutes = require("./routes/vendorRoutes");
const authRoutes = require("./routes/authRoutes"); // Import authentication routes

// Load environment variables
dotenv.config();

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/api/menu", menuRoutes);
app.use("/api/vendor", vendorRoutes);
app.use("/api/auth", authRoutes); // Set up the auth routes

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
*/




const express = require("express");
const cors = require("cors");

// Import Routes
const menuRoutes = require("./routes/menuRoutes");
const vendorRoutes = require("./routes/vendorRoutes");
const authRoutes = require("./routes/authRoutes");
const User = require("./models/User");

// Initialize app
const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/menu", menuRoutes);
app.use("/api/vendor", vendorRoutes);
app.use("/api/auth", authRoutes);

// Expose user data for testing via GET
app.get("/api/users", (req, res) => {
  const users = User.getUsers();
  res.status(200).json({ users });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});











/*const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const menuRoutes = require("./routes/menuRoutes");
const vendorRoutes = require("./routes/vendorRoutes");

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/vendor", vendorRoutes);

// GET endpoint to fetch all users (for testing from terminal)
app.get("/api/users", async (req, res) => {
  try {
    const User = require("./models/User");
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Unable to fetch users", error });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
*/
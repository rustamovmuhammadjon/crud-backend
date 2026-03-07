const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/user");

const app = express();

// 1️⃣ CORS middleware
app.use(cors()); // default: hamma domenlarga ruxsat beradi

app.use(express.json());

app.use("/user", userRoutes);

// test route
app.get("/", (req, res) => res.send("API ishlayapti 🚀"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
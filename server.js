const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/user");

const app = express();

// 1️⃣ CORS middleware
app.use(cors({
    origin: '*', // Allow only your frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify the allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Specify the allowed headers
}));

app.use(express.json());

app.use("/user", userRoutes);

// test route
app.get("/", (req, res) => res.send("API ishlayapti 🚀"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
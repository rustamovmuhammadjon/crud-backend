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
// app.get("/", (req, res) => res.send(userRoutes));

app.get("/", async (req, res) => {
    try {
        const users = await pool.query("SELECT * FROM users");
        res.json(users.rows);
    } catch (err) {
        console.error(err.message); // console.log Render logs’da chiqadi
        res.status(500).json({ error: "Server error" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
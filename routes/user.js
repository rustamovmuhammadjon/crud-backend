const express = require("express");
const router = express.Router();
const pool = require("../db");

// CREATE
router.post("/", async (req, res) => {
    const { name, email } = req.body;
    try {
        const newUser = await pool.query(
            "INSERT INTO users(name,email) VALUES($1,$2) RETURNING *",
            [name, email]
        );
        res.json(newUser.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error" });
    }
});

// READ
router.get("/", async (req, res) => {
    const users = await pool.query("SELECT * FROM users");

    res.json(users.rows);
});

// READ ONE
router.get("/:id", async (req, res) => {
    const { id } = req.params;

    const user = await pool.query("SELECT * FROM users WHERE id=$1", [id]);

    res.json(user.rows[0]);
});

// UPDATE
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    await pool.query("UPDATE users SET name=$1,email=$2 WHERE id=$3", [
        name,
        email,
        id,
    ]);

    res.json("User updated");
});

// DELETE
router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    await pool.query("DELETE FROM users WHERE id=$1", [id]);

    res.json("User deleted");
});

module.exports = router;

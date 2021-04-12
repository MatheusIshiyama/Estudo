const express = require("express");
const UserRoutes = express.Router();

UserRoutes.get("/", (req, res) => {
    res.status(200).json({ message: "Rota user" });
});

module.exports = UserRoutes;

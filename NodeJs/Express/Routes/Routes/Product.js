const express = require("express");
const ProductRoutes = express.Router();

ProductRoutes.get("/", (req, res) => {
    res.status(200).json({ message: "Rota product" });
});

module.exports = ProductRoutes;

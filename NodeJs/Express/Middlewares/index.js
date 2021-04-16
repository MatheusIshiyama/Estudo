const express = require("express");
const app = express();

//* middlewares
const query = require("./middlewares/query");

app.get("/", query, (req, res) => {
    res.status(200).json({ message: req.query.test });
});

app.listen(3000, () => {
    console.log("[SERVER] Servindo a porta 3000");
});

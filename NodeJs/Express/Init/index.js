const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({ message: "Tudo certo" });
});

app.listen(3000, () => {
    console.log("[SERVER] Servindo a porta 3000");
});

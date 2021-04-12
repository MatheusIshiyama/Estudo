const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({ message: "Caminho raiz" });
});

//* routes
const ProductRoutes = require("./Routes/Product");
const UserRoutes = require("./Routes/User");

app.use("/product", ProductRoutes);
app.use("/user", UserRoutes);

app.listen(3000, () => {
    console.log("[SERVER] Servindo a porta 3000");
});

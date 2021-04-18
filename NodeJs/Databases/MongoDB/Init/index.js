const mongoose = require("mongoose");

const uri = "url de conexão do database";

mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => console.log("[DATABASE] Conectado")
);

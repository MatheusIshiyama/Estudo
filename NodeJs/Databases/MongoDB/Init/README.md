# Como iniciar uma conexão com o MongoDB usando mongoose

Este projeto mostra como fazer uma conexão com o `MongoDB` usando o `mongooose`.

## Como funciona?

Primeiro precisamos importar o `mongoose` para uma variável constante no projeto.

```js
const mongoose = require("mongoose");
```

Para conectar no database, precisamos da url de conexão do `MongoDB` e usar a função **connect** do `mongoose`.

```js
const uri = "Url de conexão com o database";
mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => console.log("[DATABASE] Conectado")
);
```

No primeiro parâmetro a gente informa a url de conexão, o segundo são as opções, mas isto é opcional (estas opções que foram adicionadas, são alertas que o `mongoose` mostra informando que há dependências que poderão ser removidas futuramente e isto serve para arrumar) e o último é o nosso `callback`, onde a gente só dá um _console.log_ para ver quando o database fez a conexão.

---

_by Matheus Ishiyama_
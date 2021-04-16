# Iniciar um servidor express

![Nodejs](https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=white)
![Express](https://img.shields.io/badge/-Express-339933?style=flat-square&logo=Express&logoColor=white)

Aplicação simples para ligar um servidor usando `express`.

## Como funciona?

Primeiro precisamos importar o `express` para uma variável constante no projeto.

```js
const express = require("express");
```

Depois definimos uma variável constante para executar o `express`.

```js
const app = express();
```

_\*Podemos fazer esses dois passos de uma vez só, eu não gosto muito de utilizar, mas seria assim._

```js
const app = require("express")();
```

Para iniciar o servidor, escolhemos uma porta e usamos a função `listen` na variável constante. _(No exemplo foi utilizado a porta 3000, mas ela pode ser alterada sem problemas)_

```js
app.listen(3000);
```

_\*Dica: para saber se o servidor está mesmo ligado, atribuimos uma função **callback** na função `listen`, no exemplo, utilizamos `arrow function` e uma `function` padrão, (Não há diferença entre um ou outro)_

```js
app.listen(3000, () => console.log("[SERVER] Servindo a porta 3000"));

/* ou */

app.listen(3000, () => {
    console.log("[SERVER] Servindo a porta 3000");
});

/* ou */

app.listen(3000, function () {
    console.log("[SERVER] Servindo a porta 3000");
});
```

Depois disso, seu servidor já estará funcionando, basta adicionar os `methods`(ou `métodos` em português) no seu servidor, no arquivo, deixei de exemplo um método `GET`.

Após definir o método que irá utilizar, deverá ser informado o caminho onde irá acontecer esse método, no exemplo utilizamos o `'/'`, que significa que irá aplicar um método `GET` no `<domínio>/` na nossa máquina, o domínio será o localhost:`porta`, sendo assim, neste projeto será o `localhost:3000/`.

Assim como o `listen`, o método também recebe um **callback**, onde ele receberá um `request` e um `response`, abreviamos para `req` e `res`.

`req`: Tudo aquilo que o servidor recebe do usuário.
`res`: Tudo aquilo que o servidor retorna para o usuário.

No exemplo, retornamos um código `HTTP` **200** (Ok), e uma mensagem em `json` "Tudo certo".

```js
app.get("/", (req, res) => {
    res.status(200).json({ message: "Tudo certo" });
});
```

## Setup e inicialização

**Instalar dependências**

```
    npm i / npm install
        ou
    yarn / yarn install
```

**Para iniciar o projeto**

```
    npm start
        ou
    yarn start
```

---

_by Matheus Ishiyama_

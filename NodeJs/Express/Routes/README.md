# Como utilizar rotas no express

![Nodejs](https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=white)
![Express](https://img.shields.io/badge/-Express-339933?style=flat-square&logo=Express&logoColor=white)

Aplicação simples para criar `rotas` em um servidor `express`.
_(Caso não saibar criar um servidor express, veja [este projeto](https://github.com/MatheusIshiyama/Estudo/tree/main/NodeJs/Express/Init))_

## Como funciona?

Há varios jeitos de fazer rotas no `express`, mas o jeito que foi feito aqui, está em um padrão escalável.

Criamos uma pasta chamada `Routes`, nele vai ficar as nossas rotas, cada rota em um arquivo `.js`.

Neste projeto teremos duas rotas a `User` e a `Product`, igual está na nossa pasta `Routes`. _(`User.js`, `Product.js`)_

**Criar rotas**

No arquivo de uma **rota** sempre vai ser algo parecido com isso.

_Routes/Rota.js_

```js
const express = require("express");
const Rota = express.Router();

module.exports = Rota;
```

Para adicionar os `methods`, basta usar o método desejado, por exemplo um método `GET`

```js
Rota.get("/", (req, res) => {
    res.status(200).json({ message: "Rota" });
});
```

**Importar rota no index.js**

Nesse pequeno código, importamos o `express`, e definimos que a nossa variável constante é uma rota express _(`express.Router()`)_ e exportamos _(module.exports)_ essa variável, para podermos acessar ela em outro arquivo `.js`.

No nosso `index.js`, nós importamos a nossa **rota** e definimos onde ela será utilizada.

```js
const Rota = require("./Routes/Rota.js");
app.use("/rota", Rota);
```

O primeiro paramêtro é o `path` _(caminho)_ onde ele irá ser utilizado, e depois a `rota` que é o arquivo que você criou na pasta `Routes`. Exemplo: definimos que o `path` seria `/rota`, sempre que acessar o `localhost:3000/rota`, será utilizado o arquivo `Rota.js`, se for para mostrar algo no `localhost:3000/rota` basta apenas utilizar um método assim

```js
Rota.get("/", (req, res) => {
    res.status(200).json({ message: "Rota" });
});
```

Pois o `'/'` define que será na raiz do `path`, que está definido como `localhost:3000/rota`, no qual configuramos no arquivo `index.js`.

## Setup e inicialização

**Instalar dependências**

```
npm i / npm install
    ou
yarn / yarn install
```

**Iniciar o projeto**

```
npm start
    ou
yarn start
```

---

_by Matheus Ishiyama_

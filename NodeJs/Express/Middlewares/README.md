# Como utilizar middlewares no express

![Nodejs](https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=white)
![Express](https://img.shields.io/badge/-Express-339933?style=flat-square&logo=Express&logoColor=white)

Aplicação simples para criar `middlewares` em um servidor `express`.
_(Caso não saibar criar um servidor express, veja [este projeto](https://github.com/MatheusIshiyama/Estudo/tree/main/NodeJs/Express/Init))_

## Como funciona?

**O quê é?**

`Middleware` é um intermediario entre a `requisição` e a `rota`, ou seja, ao fazer uma `requisição` em uma `rota`, antes de chegar na rota, ele passa pelo `middleware`.

Ele é utilizado para fazer verificações na requisição.

**Como foi utilizado?**

Neste projeto, foi utilizado apenas para verificar se a `requisição` tinha uma `query` de `test`.

Por exemplo: `http://localhost:3000/?test=alguma_coisa`.

Neste exemplo foi feito uma `query` na `rota "/"` onde a `query` foi a variável `test` com o valor de `"alguma_coisa"`.

No projeto o `middleware` verifica se foi feita uma `query` com a variável `test`. Caso tenha a `query`, o `middleware` prossegue para a `rota` e caso não tenha, ele barra o usuário de chegar na `rota` mostrando algum erro.

**Cria middlwares**

Para criar um middleware, criamos uma pasta de `middlewares`, todos os `middlewares` ficarão dentro desta pasta.

O `middleware` recebe `request`, `response` e o `next`.

`next`: Prosseguir para a `rota`.

Por exemplo, no projeto fizemos um `middleware` para verificar a `query` da `requisição`.

```js
const middleware = (req, res, next) => {
    //* verificar a requisição

    const { test } = req.query;

    //* não foi definido uma query "test"
    if (!test) {
        res.status(400).json({ message: "'test' não informado" });
    }

    //* prosseguir para a rota
    next();
};

module.exports = middleware;
```

**Configurar a middleware na rota**

Na rota importamos o `middleware` em uma variável.

```js
const middleware = require("./middlewares/middleware");
```

Para definir em qual `rota` irá ser utilizado o `middleware`, devemos selecionar o método e incluir entre a `rota` e a `arrow function da rota`.

```js
app.get("/", middleware, (req, res) => {
    res.status(200).json({ message: "passou pelo middleware" });
});
```

O `middleware` irá garantir que quando chegar na rota, a `requisição` tenha a `query "test"`.

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

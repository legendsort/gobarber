# Gobarber API

<h1 align="center">
  <img alt="Gobarber" src="https://res.cloudinary.com/eliasgcf/image/upload/v1588625369/GoBarber/logo_iw1v9f.svg" width="200px">
</h1>

<p align="center">
  <a href="#page_with_curl-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-começando">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como Contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<h1 align="center">
  <img alt="Mockup" src="https://res.cloudinary.com/eliasgcf/image/upload/v1587509596/GoBarber/mockup_ocggit.png">
</h1>

## :page_with_curl: Sobre
Este repositório contém a API REST em Node.js utilizando TypeScript referente à aplicação GoBarber desenvolvida no Bootcap GoStack da [Rocketseat](https://rocketseat.com.br/).

A API se refere a uma plataforma de agendamento de serviços para proprietários de barbearias ou salões de beleza.
A aplicacao serve recursos para uma [ interface Web](https://github.com/samuelterra22/gobarber-web) disponibilizando recursos para o usuário ter acesso a todos os prostadores de serviços cadastrados.
Com isso, é possível escolher um determinado prestador para o agendamento na barbearia.

Já o prestador de serviço, através dq interface Web, consegue ter acesso a todos os seus horários, podendo ver todos os que estão ocupados quanto os que estão disponíveis.

## 🚀 Tecnologias

Tecnologias utilizadas no desenvolvimento da API:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)
- [Husky](https://github.com/typicode/husky)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Commitizen](https://github.com/commitizen/cz-cli)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)


## :books: Requisitos
- Ter [**Git**](https://git-scm.com/) para clonar o projeto.
- Ter [**Node.js**](https://nodejs.org/en/) instalado.
- Ter [**Docker**](https://www.docker.com/) rodando um container PostgreSQL.

## :gear: Começando
``` bash
  # Clonar o projeto:
  $ git clone https://github.com/samuelterra22/gobarber-api

  # Entrar no diretório:
  $ cd gobarber-api

  # Instalar as dependências
  $ yarn

  # Fazer uma copia do arquivo '.env.example' para '.env'
  # e configurar suas variáveis de ambiente.
  # As variáveis AWS não precisam ser preenchidas para o ambiente de desenvolvimento
  $ cp .env.example .env

  # Criar a instancia do postgreSQL usando docker
  $ docker run --name gobarber-postgres -e POSTGRES_USER=docker \
                -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker \
                -p 5432:5432 -d postgres

  # Criar a instancia do mongoDB usando docker
  $ docker run --name gobarber-mongodb -p 27017:27017 -d -t mongo

  # Criar a instancia do Redis usando docker
  $ docker run --name gobarber-redis -p 6379:6379 -d -t redis:alpine

  # Assim que os serviços estiverem em execução, execute as migrations
  $ yarn typeorm migration:run

  # Para terminar, execute a aplicação
  $ yarn dev:server
```

## 🤔 Como contribuir

**Faça um fork deste repositório**

```bash
# Fork usando a linha de comando oficial do GitHub
# Se você não tiver a CLI do GitHub, use o site para fazer isso.

$ gh repo fork samuelterra22/gobarber-api
```

**Siga os passos abaixo**

```bash
# Clone seu fork
$ git clone your-fork-url && cd gobarber-api

# Crie uma branch com sua feature
$ git checkout -b my-feature

# Faça o commit com suas mudanças
$ git commit -m 'feat: My new feature'

# Envie o código para sua branch remote
$ git push origin my-feature
```

Depois que seu pull request for aceito e a feature estiver na branch principal, você pode deletar sua branch

Feito com ❤️ por Samuel Terra 👋🏻 [Vamos de LinkedIn!](https://www.linkedin.com/in/samuelterra22/)

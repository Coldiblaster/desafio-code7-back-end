<h1 align="center">
  <br>
  <img src="https://code7.com/wp-content/themes/code7/assets/img/Grupo%201038.svg" alt="logo-horizontal-slogan-01" border="0">
  <br>
  <br>
  API Rest - Backend
  <br>
</h1>

<p align="center">
  <a href="#introdução">:small_blue_diamond: Introdução</a> 
  <a href="#pré-requisitos-warning">:small_blue_diamond: Pré-requisitos</a>
  <a href="#como-rodar-a-aplicação-arrow_forward">:small_blue_diamond: Como rodar a aplicação</a>
  <a href="#comandos-importantes-clipboard">:small_blue_diamond: Comandos Importantes</a>
  <a href="#linguagens-dependencias-e-libs-utilizadas-books">:small_blue_diamond: Linguagens, dependencias e libs utilizadas</a>
</p>

## Introdução

<p align="justify">A API Rest disponibiliza funcionalidades e dados para a aplicação Web. Os serviços disponibilizados são de acesso as dívidas de usuário, criação, atualização de dados e exclusão. 

A API faz conexão com uma base de dados Postgree SQL, a qual possibilita o armazenamento, atualizações, exclusões e inserções de dados pelo usuário.
</p>

## Pré-requisitos :warning:
- [x] [Docker](https://www.docker.com/get-started)
- [x] [Node.js](https://nodejs.org/en/download)
- [x] [Git](https://git-scm.com)
- [x] [Yarn](https://yarnpkg.com)

## Como rodar a aplicação :arrow_forward:
```bash
# Clone o repositório
$ git clone https://github.com/Coldiblaster/desafio-code7-back-end.git
# Entre na pasta
$ cd desafio-code7-back-end
# Instale as dependências
$ yarn
# Todos os dados do banco são armazenados dentro do container, então precisamos criar um volume:
$ docker volume create postgres_database
# Inicie o compose
$ docker-compose up
# Rodar Migrations
$ yarn typeorm migration:run
```

<p align="center"> 
<img src="https://recordit.co/67bKGRuhDz">
</p>

## Comandos Importantes :clipboard:
:memo: TypeOrm

```bash
# Criar migrations
$ yarn typeorm migration:run

# Para mostrar todas as migrações e se elas foram executadas ou não, use o seguinte comando:
$ yarn typeorm migration:show

# ara descartar completamente um esquema de banco de dados, use:
$ yarn typeorm schema:drop

# Reverte a última migratin criada:
$ yarn typeorm schema:revert
```

:whale: Docker

```bash
# Inicializar os container
$ docker-compose up

# Listar as imagens disponíveis no meu repositório local
$ docker images

# Criação de volume
$ docker volume create postgres_database

# Caso precise recriar o banco, limpe o volume
$ docker volume rm postgres_database

# Iniciar os container em segundo plano
$ docker-compose up -d (Como -d ele executa em 2° plano)

# Limpar as imagens e contêineres;
$ docker system prune -a

# Apagar os volumes criados:
$ docker volume prune

# Dicas de comandos para o docker:
$ https://woliveiras.com.br/posts/comandos-mais-utilizados-no-docker/
```

## Linguagens, dependencias e libraries utilizadas :books:

- [TypeScript](https://www.typescriptlang.org/)
- [NodeJs](https://nodejs.org/en/)
- [TypeOrm](https://typeorm.io/#/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

:copyright: 2020 - Vinicius Bastazin Araujo

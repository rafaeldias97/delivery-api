<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Este é um repositório genérico para um serviço de entrega construído com NestJS e TypeORM. O projeto segue o padrão Ports and Adapters (ou Hexagonal Architecture) e utiliza Docker para a configuração do ambiente. A documentação da API é gerada com Swagger.

## Estrutura do Projeto

A estrutura do projeto é organizada conforme o padrão Ports and Adapters para promover a separação clara entre a lógica de negócios e as implementações específicas:

- **`src/application/`**: Contém casos de uso e serviços da aplicação.
  - **`use-cases/`**: Casos de uso que definem a lógica de negócios.
  - **`services/`**: Serviços que encapsulam a lógica de negócios e interagem com os repositórios.

- **`src/domain/`**: Contém as entidades e interfaces do domínio.
  - **`entities/`**: Entidades do domínio, sem dependência de TypeORM.
  - **`interfaces/`**: Interfaces que abstraem a implementação específica.

- **`src/infrastructure/`**: Contém as implementações concretas e a configuração da infraestrutura.
  - **`database/`**
    - **`repositories/`**: Repositórios implementados com TypeORM.
    - **`entities/`**: Entidades específicas do TypeORM.
  - **`http/`**
    - **`controllers/`**: Controladores para gerenciar requisições HTTP.
    - **`routes/`**: Definição de rotas.
    - **`middlewares/`**: Middlewares para tratamento de erros e outras funcionalidades.
  - **`mappers/`**: Mapeamento entre entidades de domínio e DTOs.

- **`src/config/`**: Configurações do projeto.
  - `typeorm.ts`: Configuração do TypeORM.
  - `swagger.conf.ts`: Configuração do Swagger.

- **`src/shared/`**: Componentes compartilhados e utilitários.
  - **`constants/`**: Constantes usadas em toda a aplicação.
  - **`exceptions/`**: Exceções e erros personalizados.
  - **`utils/`**: Funções auxiliares e utilitários.

- **`src/main.ts`**: Arquivo principal que inicia a aplicação NestJS.
- **`src/app.module.ts`**: Módulo raiz da aplicação que configura e integra todos os módulos.

## Requisitos

- **Node.js**: Versão 18.x
- **Docker** e **Docker Compose**
- Conta na AWS

## Configuração do Ambiente

1. Configure as variáveis de ambiente:
* Copie o arquivo .env.example para .env:
```bash
$ cp .env.example .env
```
* Edite o arquivo .env e substitua as variáveis de ambiente com os valores apropriados para o seu ambiente.

2. Suba o banco de dados com Docker:

* Execute o Docker Compose para iniciar os serviços:
```bash
$ docker-compose up -d
```


## Instalação

```bash
$ nvm use 18
$ yarn install
```

## Rodando o app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Teste

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Documentação da API
A documentação da API está disponível através do Swagger e pode ser acessada em:

http://localhost:3000/docs



## License

Nest is [MIT licensed](LICENSE).

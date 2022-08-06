<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Nest](https://github.com/nestjs/nest) Bootstrap implementing Nestjs based on hexagonal architecture developped using behaviour driven development (BDD)

## Installation

```bash
$ npm install

```
 - ### docker
  https://docs.docker.com/desktop/mac/install/

create a .env file using the .env.example available on this bootstrap


## Running the app

```bash
# docker
$ docker-compose up --build

# docker dev env
$ sudo docker run -p 5432:5432 --name myreview -e POSTGRES_PASSWORD=bigpassword -e POSTGRES_DB=myreview -e POSTGRES_USER=myreviewUser -d postgres:13-alpine
$ docker start myreview
$ npm run start:dev

```

## Test

```bash
# unit tests
$ npm run test
$ npm run test:domain:mission
$ npm run test:domain:cooperator

# atdd with cucumber

$ npm run test:e2e:mission
$ npm run test:e2e:cooperator
$ npm run test:domain

# test coverage
$ npm run test:cov
```
## Script database
```bash
# populate the database
$ npm run db:populate:missions
$ npm run db:populate:cooperators

# clear the database
$ npm run db:clear:missions
$ npm run db:clear:cooperators
```
## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).


## License

Nest is [MIT licensed](LICENSE).

# GoBarber

Back-end do projeto da turma 11 do Bootcamp da Rocketseat

#### Iniciar Projeto

Para iniciar o projeto, rode o comando `yarn` ou `npm init`

#### Start

Para startar o projeto, rode o comando `yarn dev:server` ou `npm run dev:server`

#### Teste

Para rodar os testes, rode o comando `yarn test` ou `npm run test`

### Endpoints

#### Appointments

List `http://localhost:3333/appointment`

Create `http://localhost:3333/appointment`

Body exemplo

```json
{
  "provider": "Monique Azevedo",
  "date": "2020-04-14T03:12:45.434Z"
}
```

#### Transactions

List `http://localhost:3333/transactions`

Create `http://localhost:3333/transactions`

Body exemplo

```json
{
  "title": "Salário",
  "value": 3000,
  "type": "income"
}
```

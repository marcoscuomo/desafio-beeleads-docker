[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

# Instruções para utilização da api

<img src="https://i.ibb.co/RSQw82n/Captura-de-Tela-2021-12-06-a-s-23-09-05.png" alt="Api Beeleeds" />


## `1. Docker`
#### 1.1 Instalação

O Docker precisará estar instalado para executar os containers do Node e do MySql.\
Caso ainda não tenha o Docker em sua máquina, siga as instruções abaixo para fazer a intalação de acordo com seu sistema operacional.

[Windows](https://docs.docker.com/desktop/windows/install)\
[Linux ( Ubuntu )](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04-pt)\
[Mac](https://docs.docker.com/desktop/mac/install)

#### 1.2 Docker-compose
Com o docker instalado e em execução vamos realizar a criação dos containers, para isso devemos rodar o comando:

```
docker-compose up -d
```

Para confirmar se os containers estão em execução execute o comando:

```
docker ps
```

A saída deverá ser parecida com a imagem abaixo:\

<img src="https://i.ibb.co/MgCR3fH/Captura-de-Tela-2021-12-06-a-s-23-47-25.png" alt="docker ps" />

Caso os containers não estejam em execução rodar o comando:

```
docker-compose start
```

## `2. Instalando as depêndencias`

Para baixar as depêndecias da aplicação rodar o comando:

```
yarn ou npm install
```


## `3. Banco de dados`
#### 3.1 Migrations

Com o docker rodando e os containers em execução agora será necessário executar as migrations para a criação das tabelas, para isso execute o comando:

```
yarn typeorm migration:run
```

A partir desse ponto já será possível acessar as rotas da api.\
Primeiro será necessário criar um usuário, pois as rotas de gerenciamento do cliente precisam ser requisições autenticadas.


## `4. Criando um usuário `

- Rota: http://localhost:3333/users
- Método: post
- Header
  - Content-Type: application/json
- Body: 

```
{
  "name": "Marcos Souza",
  "email": "marcos.souza@gmail.com",
  "password": "123456"
}
```

## `5. Autenticando `

- Rota: http://localhost:3333/users/auth
- Método: post
- Header
  - Content-Type: application/json
- Body: 

```
{
  "email": "user@example.com",
  "password": "123456"
}
```
- Retorno:
```
  {
    "user": {
    "name": "name user",
    "email": "nameuser@example.com"
  },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mzg4MjM0ODksImV4cCI6MTYzODgyNDM4OSwic3ViIjoiMSJ9.8ODt-fzupRb8J5Eoh8S2nshp_yOk1EoKJDFccWm1ksQ",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmNvcy5zb3V6YUBnbWFpbC5jb20iLCJpYXQiOjE2Mzg4MjM0ODksImV4cCI6MTY0MTQxNTQ4OSwic3ViIjoiMSJ9.FnfMDSyDhYKjKdXv107TVoQU9mjp1jCpWi4LPD4unPU"
  }
```

## `6. Refresh token `

*obs1. O token está com tempo de expiração de 15 minutos, um tempo curto justamente para testar a funcionalidade de refresh tolen*

*obs2. O token a ser enviado nessa requisição é o refresh token recebido na autenticação*

- Rota: http://localhost:3333/users/refresh-token
- Método: post
- Header:
  - Content-Type: application/json
- Body: 

```
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmNvcy5zb3V6YUBnbWFpbC5jb20iLCJpYXQiOjE2Mzg3OTAzMTQsImV4cCI6MTY0MTM4MjMxNCwic3ViIjoiMSJ9.s1qs_PTTk3e1FdGjSFcmUYWwUEsjv3pYWf0ak4gO6ls"
  }
```

- Retorno:
```
  {
    "user": {
    "name": "name user",
    "email": "nameuser@example.com"
  },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mzg4MjM0ODksImV4cCI6MTYzODgyNDM4OSwic3ViIjoiMSJ9.8ODt-fzupRb8J5Eoh8S2nshp_yOk1EoKJDFccWm1ksQ",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmNvcy5zb3V6YUBnbWFpbC5jb20iLCJpYXQiOjE2Mzg4MjM0ODksImV4cCI6MTY0MTQxNTQ4OSwic3ViIjoiMSJ9.FnfMDSyDhYKjKdXv107TVoQU9mjp1jCpWi4LPD4unPU"
  }
```

## `7. Cadastrando um cliente `

- Rota: http://localhost:3333/customer
- Método: post
- Header: 
  - Content-Type: application/json
  - Authorization: Bearer *token*
- Body:
```
{
  "nome": "Joe Doe",
  "dataNascimento": "11/12/1950",
  "telefone": "11910091444",
  "sexo": "m",
  "email": "joe@example.com"
}
```

## `8. Atualizando um cliente `

- Rota: http://localhost:3333/customer
- Método: put
- Header: 
  - Content-Type: application/json
  - Authorization: Bearer *token*
- Body:
```
{
  "id": "1",
  "nome": "Joe Doe",
  "dataNascimento": "11/12/1950",
  "telefone": "11910091444",
  "sexo": "m",
  "email": "joe@example.com"
}
```

## `9. Listando os clientes `

- Rota: http://localhost:3333/customer
- Método: get
- Header: 
  - Authorization: Bearer *token*
- Body:
```
no body
```

## `10. Excluindo um cliente `

Deverá ser passado o id do cliente no query params da rota 

- Rota: http://localhost:3333/customer/:id
- Método: delete
- Header: 
  - Authorization: Bearer *token*
- Body:
```
no body
```

## `11. Pesquisando um cliente `

Nessa rota poderá ser pesquisado por todos os campos dos cadastros 

- Rota: http://localhost:3333/customer/:id
- Método: post
- Header: 
  - Content-Type: application/json
  - Authorization: Bearer *token*
- Body:
```
{
  "nome": "Jo"
}
```

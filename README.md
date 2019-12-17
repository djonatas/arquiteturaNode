# Desafio Software Engineer, Back-end - Pagar.me

## Conteúdo

- [Tecnologia e Frameworks](#tecnologia)
- [Instalação](#Instalação)
- [Executar os testes](#excutar-testes)

- [Rodar Aplicacao](#running-application)
    - [Running Application](#running-application)

## Tecnologia e Frameworks

Tecnologias e Frameworks utiliza

- **[Docker](https://docs.docker.com)** e **[Docker Compose](https://docs.docker.com/compose/)** para criar o ambiente de testes e2e.
- **[Express](https://github.com/expressjs/express)** Servidor de api.
- **[Mongo](https://www.mongodb.com/)** Banco de dados.
- **[Mongoose](https://mongoosejs.com/)** Mongo ORM.
- **[Chai](https://www.chaijs.com/)** Biblioteca assertion.
- **[SuperTest](https://github.com/visionmedia/supertest)** Teste e2e.
- **[Mocha](https://mochajs.org/)** Teste Unitários e integração.
- **[Coverage](https://github.com/shinnn/coverage)** Cobertura de testes.


## Instalação
1. **Para instalar as dependências use:**
```sh
$ npm install
```

### Executar Testes

1. **Para rodar os testes use:**
```sh
$ npm run test
```

### Rodar Aplicação

1. **Para rodar a aplicação use:**
```sh
$ npm run start
```

### Uso da API

_Entendendo que essa aplicação é apenas uma POC não foi criado um cadastro de clientes, mas foi 
mesmo assim fiz uma validação de authorização das chamadas HTTP. Todas as chamadas precisam de um
header Authorizarion _ 

```sh
Authorizarion - ABC1234ZWE
```

1. **Pagamento use:**
```sh
$/cashIn
```

body:
```sh
{
   "description": "Compra 0001",
   "value": 10000,
   "paymentMethod": "debit_card",
   "card": {
   	    "number": "999.999.999.999",
   		"holderName": "João da Silva",
   		"cvv": 999,
   		"validate": "12/2020"
   }
}
```
- **description:** Descrição da transação
- **value:** Valor da transação, as duas ultimas casas decimais correspondem aos centavos, ou seja, R$ 101,20 deve ser representado 10120
- **paymentMethod:** Método de pagamento, "debit_card" para pagamento no débito, "credit_card" para pagamento no crédito
- **card:**
    - **number:** Número do cartão de crédito formatado.
    - **holderName:** Nome do proprietário do cartão.
    - **cvv:** Número de segurança do cartão.
    - **validate:** Validade do cartão.
# Banco API Testes

Projeto de automação de testes para validação da API REST do projeto Banco API.

## Objetivo

Este projeto tem como objetivo automatizar a validação dos endpoints disponibilizados pela API REST do projeto Banco API, qualidade das regras de negócio, autenticação, transferências, consultas e demais funcionalidades disponibilizadas pela aplicação.

Os testes foram desenvolvidos utilizando Javascript e executados através do framework Mocha, realizando requisições HTTP reais contra a API utilizando Supertest e validações com Chai.

API testada:

https://github.com/juliodelimas/banco-api

---

# Tecnologias Utilizadas

## Linguagem

* Javascript (Node.js)

## Frameworks e Bibliotecas

* Mocha
* Chai
* Supertest
* Mochawesome
* Dotenv

---

# Estrutura do Projeto

```text
banco-api-tests/
│
├── fixture/
│   └── Arquivos JSON utilizados como massa de teste
│
├── helpers/
│   └── Funções auxiliares utilizadas pelos testes
│
├── mochawesome-report/
│   └── Relatórios HTML gerados após execução dos testes
│
├── test/
│   ├── login.test.js
│   ├── transferencia.test.js
│   └── Demais arquivos de testes
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

# Pré-Requisitos

Antes de executar os testes é necessário possuir:

* Node.js instalado
* NPM instalado
* Projeto Banco API em execução

Repositório da API:

https://github.com/juliodelimas/banco-api

---

# Instalação

Clone o repositório:

```bash
git clone https://github.com/Leandrordsc/banco-api-testes.git
```

Acesse a pasta:

```bash
cd banco-api-testes
```

Instale as dependências:

```bash
npm install
```

---

# Configuração do Arquivo .env

Este arquivo não é versionado e deve ser criado manualmente na raiz do projeto.

Crie o arquivo:

```text
.env
```

Conteúdo:

```env
BASE_URL=http://localhost:3000
```

Onde:

| Variável | Descrição                 |
| -------- | ------------------------- |
| BASE_URL | URL base da API Banco API |

Exemplo:

```env
BASE_URL=http://localhost:3000
```

---

# Execução dos Testes

Executar todos os testes:

```bash
npm test
```

---

# Executando um Arquivo Específico

Login:

```bash
npx mocha ./test/login.test.js
```

Transferências:

```bash
npx mocha ./test/transferencia.test.js
```

---

# Relatórios de Teste

O projeto utiliza o Mochawesome para geração de relatórios HTML.

Após a execução dos testes:

```bash
npm test
```

Será criada automaticamente a pasta:

```text
mochawesome-report/
```

Arquivos gerados:

```text
mochawesome-report/
├── mochawesome.html
└── mochawesome.json
```

Para visualizar o relatório:

Abra o arquivo:

```text
mochawesome-report/mochawesome.html
```

em qualquer navegador.

---

# Casos de Teste Automatizados

Atualmente o projeto contempla testes para:

## Login

Endpoint:

```http
POST /login
```

Validações:

* Login com credenciais válidas
* Geração de token
* Código HTTP esperado

## Transferências

Endpoints:

```http
POST /transferencias
GET /transferencias
GET /transferencias/{id}
```

Validações:

* Criação de transferências
* Consulta por ID
* Paginação
* Validação de estrutura da resposta
* Validação de regras de negócio

---

# Dependências Utilizadas

## Mocha

Framework de execução dos testes.

Documentação:

https://mochajs.org/

---

## Chai

Biblioteca de assertions.

Documentação:

https://www.chaijs.com/

---

## Supertest

Biblioteca para realização de requisições HTTP durante os testes.

Documentação:

https://github.com/ladjs/supertest

---

## Mochawesome

Gerador de relatórios HTML para Mocha.

Documentação:

https://github.com/adamgruber/mochawesome

---

## Dotenv

Gerenciamento de variáveis de ambiente.

Documentação:

https://github.com/motdotla/dotenv

---

# Autor

Leandro Rodrigues da Silva Costa

GitHub:

https://github.com/Leandrordsc

---

# Projeto Relacionado

Banco API

https://github.com/juliodelimas/banco-api

---

# Licença

Este projeto foi desenvolvido para fins educacionais e de prática de automação de testes de APIs REST.

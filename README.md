# Calculadora - React & JSX

<img src="/imagens/Calculadora.png">
<div style="display: inline_block"><br/>
 
  <img align="center" alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img align="center" alt="Node" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img align="center" alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>

</div>

Este é um projeto de **calculadora** desenvolvido com **React** e **JSX**. O objetivo principal deste projeto é fornecer uma interface simples para cálculos simples, além de servir como uma base para **testes automatizados** utilizando **Playwright**.

## Tecnologias Usadas

- **React**: Framework para construção da interface de usuário.
- **JSX**: Sintaxe que combina JavaScript e HTML para criar componentes.
- **Playwright**: Ferramenta para automação de testes end-to-end (E2E).

## Funcionalidade

A calculadora permite realizar as seguintes operações:

- Soma.
- Subtração.
- Exibição do resultado.

O foco principal deste projeto é a interação com a interface, facilitando o teste de funcionalidades como a entrada de dados e a execução de operações.

## Setup do Projeto

### 1. Clone o repositório:

```bash
git clone https://github.com/AndersonPaulo/Calculadora.git
cd calculadora
```

### 2. Instale as dependências:

```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento:

```bash
npm start
```

O servidor será iniciado em `http://localhost:3000`.

## Testes com Playwright

Para realizar os testes automatizados com o Playwright, siga os passos abaixo:

### 1. Instale as dependências do Playwright:

```bash
npm install -D playwright
```


### 2. Execute os testes:

Para rodar os testes, utilize o seguinte comando:

```bash
npx playwright test
```

Isso executará os testes e você verá o resultado no terminal.

### 3. (Opcional) Executar testes em diferentes navegadores:

Se quiser rodar os testes em outros navegadores (como Chromium, Firefox ou WebKit), use o seguinte comando:

```bash
npx playwright test --project=firefox
```

Esse comando executará os testes no navegador Firefox

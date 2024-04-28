# Projeto PGATS (Pós-Graduação em Automação de Testes de Software)

Este repositório contém o código fonte para o projeto acadêmico da matéria Programação para Automação de Testes.

## Estrutura do Projeto

O projeto está organizado nas seguintes pastas e arquivos principais:

- `src/compras/compras.js`: Contém a lógica para calcular o total a pagar pelas ferramentas selecionadas.
- `test/compras/compras.test.js`: Contém os testes unitários para a função `calcularTotal`.
- `package.json`: Define as dependências e os scripts de teste do projeto.

## Funcionalidades

A função `calcularTotal` do arquivo `src/compras/compras.js` executa as seguintes operações:

1. Valida se as listas de ferramentas disponíveis e ferramentas a comprar não estão vazias.
2. Calcula o total a pagar com base nas ferramentas escolhidas.
3. Retorna uma string detalhando o total a pagar e as ferramentas compradas.

## Como Executar

Para executar este projeto, siga os passos abaixo:

1. Clone o repositório
2. npm install -D mocha (instalar dependência)
3. clicar no npm script test (ou rodar npm test no terminal)

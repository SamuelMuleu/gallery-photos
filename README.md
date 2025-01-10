# PhotoGrid

PhotoGrid é uma aplicação React que permite pesquisar e visualizar fotos usando a API do Unsplash.

## Demonstração
Você pode acessar a versão hospedada da aplicação [aqui](https://galleryphotostest.netlify.app/).

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Axios**: Cliente HTTP para fazer requisições à API do Unsplash.
- **motion**: Biblioteca para animações.
- **Tailwind CSS**: Framework CSS para estilização.

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- Node.js
- npm ou yarn

## Rodando a Aplicação Localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/SamuelMuleu/gallery-photos.git
```
Instale as dependências:

Se estiver usando npm:
```bash
npm install
```
Ou, se estiver usando yarn:
```bash
yarn install
```
Configure a chave da API do Unsplash:

Crie um arquivo .env.local na raiz do projeto e adicione a seguinte linha :
```bash
VITE_APP_UNSPLASH_API_KEY=w1KKR8LgaHDmdo_QuwmG6IIChheUGW_IxtBbXlQ2_r8
```
Inicie a aplicação:

Se você estiver usando npm:
```bash
npm run dev
```
Ou, se estiver usando yarn:
```bash

yarn dev
```

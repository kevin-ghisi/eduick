## 💻 Sobre o desafio

Para rodar o ambiente de desenvolvimento, digite um dos comandos a seguir no seu terminal:

```bash
npm run dev
# ou
yarn dev
```

Para rodar a API base no ambiente de desenvolvimento, digite o comando a seguir no seu terminal:

```bash
yarn server
```

Abra [http://localhost:3000](http://localhost:3000) para acessar a página inicial.
Abra [http://localhost:3000/dashboard](http://localhost:3000/dashboar) para acessar a dashboard.

A dashboard foi criada dentro do diretório `src/pages`;
Cada componente está dentro do diretório `src/components`;

Os arquivos CSS foram divididos em módulos de cada componente, estande dentro do diretório `src/styles`, variando para cada página;

## Sobre como fiz o desafio

Bem, ainda sou relativamente novo com o ReactJS, porém tentei sempre respeitar as regras de estrutura e maneiras de se executar o projeto, como framework para o ReactJS fiz a utilização do NextJS;

Para a responsividade utilizei como base 900px de largura e criei uma função para a aquisição da mesma, esta fica localizada em `utils`

Em `services` é criada uma chamada com nome "api" para a aquisição de dados da API, utilizei a biblioteca Axios para isto.

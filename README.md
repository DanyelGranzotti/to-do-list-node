## README.md - Desafio Técnico Fullstack

### Descrição do Projeto
Este projeto consiste em uma aplicação web simples para gerenciamento de tarefas. A aplicação permite aos usuários:

- Cadastro: Criar uma conta com e-mail e senha.
- Login: Autenticar-se na aplicação utilizando JWT.
- Gerenciamento de Tarefas:
  - Visualizar todas as suas tarefas.
  - Adicionar novas tarefas.
  - Marcar tarefas como concluídas.
  - Editar tarefas existentes.
  - Excluir tarefas.

### Tecnologias Utilizadas
* **Backend:** Node.js 18.12.1, Express.js 4.18.2, MySQL 8.0.33, JWT
* **Frontend:** React 18.2.0, React Router 6.10.0

### Estrutura do Projeto
```bash
seu-projeto/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── public/
├── .env
└── package.json
```

### Como Rodar o Projeto
#### 1. Clonar o Repositório
~~~bash 
git clone https://seu-repositorio.git
~~~~
#### 2. Instalar as Dependências
~~~bash
npm install
~~~

### Decisões de Design
* **Backend:** Utilizei Node.js e Express.js para criar uma API RESTful.
* **Frontend:** Utilizei React para criar a interface do usuário.
* **Banco de Dados:** Utilizei MySQL para armazenar os dados dos usuários e tarefas.
* **Autenticação:** Utilizei JWT para autenticação de usuários.
* **Estilização:** Utilizei Bootstrap com algumas customizações para estilizar a aplicação devido à sua facilidade de uso e documentação.
* **Testes:** Utilizei Jest e React Testing Library para testes unitários e de integração.
* **Gerenciamento de Estado:** Utilizei Redux para gerenciamento de estado em aplicações maiores.

### Desafios e Soluções
* **Gerenciamento de estado:** Optei por utilizar o Redux para um melhor gerenciamento de estado em aplicações maiores.
* **Testes:** A cobertura de testes foi aumentada utilizando Jest e React Testing Library.

### Melhorias Futuras
* **Internacionalização:** Implementar suporte a múltiplos idiomas.
* **Notificações em tempo real:** Utilizar WebSockets para notificações em tempo real.

### Contribuições
Contribuições são bem-vindas! Por favor, abra um issue ou um pull request.

### Licença
Este projeto está licenciado sob a licença MIT.

**Desenvolvido por Danyel Granzotti**
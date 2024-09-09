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
* **Estilização:** Bootstrap 5.3.0
* **DevOps:** Docker, Docker Compose

### Como Rodar o Projeto
#### 1. Clonar o Repositório
~~~bash 
git clone https://github.com/DanyelGranzotti/to-do-list-node
~~~~
#### 2. Entrar na Pasta do Projeto
~~~bash 
cd to-do-list-node
~~~~
#### 3. Rodar o Projeto com Docker Compose
~~~bash
docker-compose up
~~~

### Decisões de Design
* **Backend:** Utilizei Node.js e Express.js para criar uma API RESTful.
* **Frontend:** Utilizei React para criar a interface do usuário.
* **Banco de Dados:** Utilizei MySQL para armazenar os dados dos usuários e tarefas.
* **Autenticação:** Utilizei JWT para autenticação de usuários.
* **Estilização:** Utilizei Bootstrap com algumas customizações para estilizar a aplicação devido à sua facilidade de uso e documentação.
* **DevOps:** Utilizei Docker e Docker Compose para facilitar a execução do projeto em diferentes ambientes.

### Melhorias Futuras
* **Internacionalização:** Implementar suporte a múltiplos idiomas.
* **Notificações em tempo real:** Utilizar WebSockets para notificações em tempo real.

### Licença
Este projeto está licenciado sob a licença MIT.

**Desenvolvido por Danyel Granzotti**
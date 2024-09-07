const db = require("../db");

db.query(
  `CREATE TABLE IF NOT EXISTS tasks (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status BOOLEAN DEFAULT 0 NOT NULL,
  userId INT NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
)`,
  (err) => {
    if (err) {
      console.error("Erro ao criar tabela de tarefas:", err);
    }
  }
);

module.exports = db;

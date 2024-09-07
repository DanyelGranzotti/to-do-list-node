const db = require("../db");

db.query(
  `CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255)
)`,
  (err) => {
    if (err) {
      console.error("Erro ao criar tabela de usuários:", err);
    }
  }
);

module.exports = db;

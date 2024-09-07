const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../models/userModel");

exports.register = (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  db.query(
    `INSERT INTO users (email, password) VALUES (?, ?)`,
    [email, hashedPassword],
    (err, result) => {
      if (err) {
        return res.status(400).send("Erro ao registrar usuário");
      }
      res.status(200).send({ id: result.insertId });
    }
  );
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query(`SELECT * FROM users WHERE email = ?`, [email], (err, results) => {
    if (err || results.length === 0) {
      return res.status(400).send("Email ou senha inválidos");
    }

    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(400).send("Email ou senha inválidos");
    }
    const token = jwt.sign({ id: user.id }, "secretkey", { expiresIn: "1h" });
    res.status(200).send({
      token,
      userId: user.id,
    });
  });
};

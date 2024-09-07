const db = require("../models/taskModel");

// Função para verificar se a tarefa existe
const checkTaskExists = async (id) => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM tasks WHERE id = ?`, [id], (err, results) => {
      if (err) {
        return reject(new Error("Erro ao buscar tarefa"));
      }
      if (results.length === 0) {
        return reject(new Error("Tarefa não encontrada"));
      }
      resolve(results[0]);
    });
  });
};

// Criar nova tarefa
exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id;

    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Título e descrição são obrigatórios" });
    }

    db.query(
      `INSERT INTO tasks (title, description, userId) VALUES (?, ?, ?)`,
      [title, description, userId],
      (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Erro ao criar tarefa", error: err });
        }
        res.status(201).json({ id: result.insertId });
      }
    );
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro interno do servidor", error: error.message });
  }
};

// Obter lista de tarefas
exports.getTasks = async (req, res) => {
  try {
    const userId = req.user.id;
    const { status = "", order = "asc", per_page = 10, page = 1 } = req.query;
    const offset = (page - 1) * per_page;

    db.query(
      status
        ? `SELECT * FROM tasks WHERE userId = ? AND status = ? ORDER BY id ${order} LIMIT ? OFFSET ?`
        : `SELECT * FROM tasks WHERE userId = ? ORDER BY id ${order} LIMIT ? OFFSET ?`,
      status
        ? [userId, status, Number(per_page), offset]
        : [userId, Number(per_page), offset],

      (err, results) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Erro ao buscar tarefas", error: err });
        }
        res.status(200).json(results);
      }
    );
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro interno do servidor", error: error.message });
  }
};

// Atualizar tarefa
exports.updateTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const { id } = req.params;

    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Título e descrição são obrigatórios" });
    }

    await checkTaskExists(id);

    db.query(
      `UPDATE tasks SET title = ?, description = ? WHERE id = ?`,
      [title, description, id],
      (err) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Erro ao atualizar tarefa", error: err });
        }
        res.status(200).json({ message: "Tarefa atualizada com sucesso" });
      }
    );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Atualizar status da tarefa
exports.updateTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (typeof status === "undefined") {
      return res.status(400).json({ message: "O status é obrigatório" });
    }

    await checkTaskExists(id);

    db.query(
      `UPDATE tasks SET status = ? WHERE id = ?`,
      [status, id],
      (err) => {
        if (err) {
          return res.status(500).json({
            message: "Erro ao atualizar status da tarefa",
            error: err,
          });
        }
        res
          .status(200)
          .json({ message: "Status da tarefa atualizado com sucesso" });
      }
    );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Deletar tarefa
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    await checkTaskExists(id);

    db.query(`DELETE FROM tasks WHERE id = ?`, [id], (err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Erro ao excluir tarefa", error: err });
      }
      res.status(200).json({ message: "Tarefa excluída com sucesso" });
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

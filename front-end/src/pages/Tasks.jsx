import React, { useEffect, useState } from "react";
import { Button, Container, Form, ListGroup } from "react-bootstrap";
import { BsPencilFill, BsTrashFill } from "react-icons/bs";
import { toast } from "react-toastify";
import {
  deleteTask,
  getTasks,
  postTask,
  putTask,
  updateTaskStatus,
} from "../api/tasks";
import AddTaskModal from "../components/Tasks/AddTaskModal";
import DeleteTaskModal from "../components/Tasks/DeleteTaskModal";
import EditTaskModal from "../components/Tasks/EditTaskModal";

const Tasks = () => {
  const [tasks, setTasks] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleOpenAddModal = () => setShowAddModal(true);
  const handleOpenEditModal = (task) => {
    setSelectedTask(task);
    setShowEditModal(true);
  };
  const handleOpenDeleteModal = (task) => {
    setSelectedTask(task);
    setShowDeleteModal(true);
  };

  const onAddTask = async (task) => {
    const response = await postTask(task);
    if (response.status === 201) {
      toast.info("Tarefa adicionada com sucesso");
      fetchTasks();
    }
  };

  const onEditTask = async (task) => {
    const response = await putTask(task);
    if (response.status === 200) {
      toast.info("Tarefa editada com sucesso");
      fetchTasks();
    }
  };

  const onDeleteTask = async (id) => {
    const response = await deleteTask(id);
    if (response.status === 200) {
      toast.error("Tarefa deletada com sucesso");
      fetchTasks();
    }
  };

  const completeTask = async (task) => {
    console.log(task);
    const response = await updateTaskStatus(task.id, task.status);
    if (response.status === 200) {
      fetchTasks();
    }
  };

  const fetchTasks = async () => {
    const response = await getTasks();
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Container className="bg-light d-flex flex-column justify-content-center rounded-3 py-5 p-md-5">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Tarefas</h2>
        <Button variant="primary" onClick={handleOpenAddModal}>
          Adicionar Tarefa
        </Button>
      </div>
      <div className="d-flex flex-column gap-1 mt-4">
        <ListGroup
          horizontal
          className="w-100 d-flex justify-content-between align-items-center text-center h-100"
        >
          <ListGroup.Item className="w-100 d-flex justify-content-center align-items-center">
            Status
          </ListGroup.Item>
          <ListGroup.Item className="w-100 d-flex justify-content-center align-items-center">
            Título
          </ListGroup.Item>
          <ListGroup.Item className="w-100 d-flex justify-content-center align-items-center">
            Descrição
          </ListGroup.Item>
          <ListGroup.Item className="w-100 d-flex justify-content-center align-items-center">
            Ações
          </ListGroup.Item>
        </ListGroup>
        {tasks?.map((task, index) => (
          <ListGroup
            horizontal
            className="w-100 d-flex justify-content-between align-items-center text-center h-100"
            style={
              task.status
                ? { opacity: 0.5, transition: "0.5s" }
                : { transition: "0.5s" }
            }
            key={index}
          >
            <ListGroup.Item className="d-flex justify-content-center align-items-center w-100">
              <Form.Check
                type="switch"
                id="switch"
                checked={task.status}
                onChange={() => completeTask(task)}
              />
            </ListGroup.Item>

            <ListGroup.Item className="d-flex justify-content-center align-items-center w-100">
              {task.title}
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-center align-items-center w-100">
              {task.description}
            </ListGroup.Item>
            <ListGroup.Item className="w-100 d-flex justify-content-around h-100 align-items-center">
              <BsPencilFill
                onClick={() => handleOpenEditModal(task)}
                className="icon-button"
                color="#0d6efd"
                size={20}
              />
              <BsTrashFill
                onClick={() => handleOpenDeleteModal(task)}
                className="icon-button"
                color="#dc3545"
                size={20}
              />
            </ListGroup.Item>
          </ListGroup>
        ))}
        {tasks?.length === 0 && (
          <h5 className="text-center">Nenhuma tarefa cadastrada</h5>
        )}
      </div>
      {/* Modais */}
      <AddTaskModal
        show={showAddModal}
        handleClose={() => setShowAddModal(false)}
        onAddTask={onAddTask}
      />
      {selectedTask && (
        <EditTaskModal
          show={showEditModal}
          handleClose={() => setShowEditModal(false)}
          task={selectedTask}
          onEditTask={onEditTask}
        />
      )}
      {selectedTask && (
        <DeleteTaskModal
          show={showDeleteModal}
          handleClose={() => setShowDeleteModal(false)}
          task={selectedTask}
          onDeleteTask={onDeleteTask}
        />
      )}
    </Container>
  );
};

export default Tasks;

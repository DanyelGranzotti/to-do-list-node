import React from "react";
import { Button, Modal } from "react-bootstrap";

const DeleteTaskModal = ({ show, handleClose, task, onDeleteTask }) => {
  const handleDelete = () => {
    onDeleteTask(task.id);
    handleClose();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>Excluir Tarefa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Tem certeza que deseja excluir a tarefa "{task.title}"?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Excluir
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteTaskModal;

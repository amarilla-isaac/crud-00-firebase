import { deleteTasks, updateTask } from "../firebase/api";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import {
  Button,
  Container,
  TableContainer,
  Table,
  TableCell,
  TableRow,
  TableBody,
  TextField,
  Paper,
} from "@mui/material";
// import { useNavigate } from "react-router-dom";

export const TaskCard = ({ tarea }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [task, setTask] = useState({ tarea: "", done: false });

  useEffect(() => {
    setTask({ ...tarea, done: false });
  }, [tarea]);

  const onDeleteTask = async (id) => {
    if (window.confirm("Quieres eliminar la tarea?")) {
      await deleteTasks(id);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const handleChange = ({ target: { name, value } }) => {
    setTask({ ...task, [name]: value });
  };
  const handleSave = async (id) => {
    updateTask(id, task);
    closeModal();
  };

  return (
    <>
      <Container>
        <TableContainer component={Paper}>
          <Table aria-label="simple-table">
            <TableBody>
              <TableRow key={tarea.id}>
                <TableCell>{tarea.tarea}</TableCell>
                <TableCell>
                  <Button
                    className="btn btn-danger btn-sm d-flex align-items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteTask(tarea.id);
                    }}
                  >
                    Delete
                  </Button>
                  <Button onClick={openModal}>Update</Button>
                  <Modal
                    isOpen={modalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Update Task"
                    ariaHideApp={false}
                  >
                    <h4>Actualizar Tarea</h4>
                    <hr />
                    <TextField
                      type="text"
                      value={tarea.tarea.value}
                      name="tarea"
                      onChange={handleChange}
                    />
                    <Button onClick={() => handleSave(tarea.id)}>
                      Actualizar
                    </Button>
                    <Button onClick={closeModal}>Cancelar</Button>
                  </Modal>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

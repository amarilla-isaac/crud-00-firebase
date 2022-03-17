import { useState, useEffect } from "react";
import { saveTask, getTask } from "../firebase/api";
import { useParams } from "react-router-dom";
import TaskList from "./TaskList";
import { Button, Container, FormControl, Grid, Input } from "@mui/material";

const initialState = {
  tarea: "",
  done: false,
};
const TaskForm = ({ tarea }) => {
  const [newTask, setNewTask] = useState(initialState);
  useEffect(() => {
    setNewTask({ ...tarea, done: false });
  }, [tarea]);
  const params = useParams();

  const handleChange = ({ target: { name, value } }) => {
    setNewTask({ ...newTask, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newTask.tarea) {
      alert("Tarea Invalida");
    } else {
      await saveTask(newTask);
    }
    setNewTask(initialState);
  };

  const getTaskById = async (id) => {
    try {
      const doc = await getTask(id);
      setNewTask({ ...doc.data() });
    } catch (error) {
      console.error("no get Task by Id components/TaskForm.jsx-ln:26", error);
    }
  };
  useEffect(() => {
    if (params.id) {
      getTaskById(params.id);
    }
  }, [params.id]);
  return (
    <>
      <br />
      <br />
      <Container>
        <Grid container>
          <FormControl>
            <Grid item>
              <Input
                placeholder="Add task"
                // value={newTask}
                name="tarea"
                onChange={handleChange}
              />
              <Button variant="standart" onClick={handleSubmit}>
                Add
              </Button>
            </Grid>
          </FormControl>
        </Grid>
      </Container>
      <br />
      <TaskList />
    </>
  );
};

export default TaskForm;

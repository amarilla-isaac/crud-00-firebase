import { useState, useEffect } from "react";
import { saveTask, getTask } from "../firebase/api";
import { useParams } from "react-router-dom";
import TaskList from "./TaskList";
import { Button, Container, FormControl, Grid, Input } from "@mui/material";

const initialState = {
  tarea: "",
  done: false,
};
const TaskForm = () => {
  const [task, setTask] = useState(initialState);
  const params = useParams();

  const handleChange = ({ target: { tarea, value } }) => {
    console.log(tarea);
    setTask({ ...task, [tarea]: value });
  };
  const handleSubmit = async () => {
    if (!params.id) {
      await saveTask(task);
    }
    setTask(initialState);
  };

  const getTaskById = async (id) => {
    try {
      const doc = await getTask(id);
      setTask({ ...doc.data() });
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
      <Container>
        <Grid container>
          <FormControl>
            <Grid item>
              <Input
                id="input-tarea"
                type="text"
                placeholder="add Task"
                // value={task}
                name="task"
                onChange={handleChange}
              />

              <Button variant="standart" onClick={handleSubmit}>
                Agregar
              </Button>
            </Grid>
          </FormControl>
        </Grid>
      </Container>
      <TaskList />
    </>
  );
};

export default TaskForm;

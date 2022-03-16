import { useEffect, useState } from "react";
import { getTasks, updateLists } from "../firebase/api";
import { TaskCard } from "./TaskCard";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const getName = async () => {
    const querySnapshot = await getTasks();
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setTasks(docs);
  };

  useEffect(() => {
    getName();
  }, []);

  useEffect(() => {
    const test = updateLists();

    return () => test();
  }, []);

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskCard tarea={task} />
        </div>
      ))}
    </>
  );
};

export default TaskList;

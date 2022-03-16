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
    updateLists((snap) => {
      const items = [];
      snap.forEach((snap_data) => {
        items.push({ ...snap_data.data(), id: snap_data.id });
      });
      console.log(items);
      setTasks(items);
    });
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

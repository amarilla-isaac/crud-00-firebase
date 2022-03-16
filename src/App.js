import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import TaskForm from "./components/TaskForm";

const App = () => {
  return (
    <>
      <Layout />
      <TaskForm />
    </>
  );
};
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route path="/" element={<TaskList />} />
//         <Route path="/add" element={<TaskForm />} />
//         <Route path="/edit/:id" element={<TaskForm />} />
//         <Route path="*" element={<h1>Not Found</h1>} />
//       </Route>
//     </Routes>
//   </BrowserRouter>
// );

export default App;

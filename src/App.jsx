import { useState } from "react";

// custom components
import { CustomForm } from "./components/CustomForm";

function App() {
  const [tasks, setTasks] = useState([]);

  /* sempre quando temos um array ou objeto como referência no useState, precisamos passar o estado inicial na função "setTasks" */
  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask} />
    </div>
  );
}

export default App;

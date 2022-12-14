import React from "react";

// component import
import TaskItem from "./TaskItem";

// styles
import styles from "./TaskList.module.css";

export default function TaskList({ tasks }) {
  return (
    <ul className={styles.tasks}>
      {tasks.sort((a, b) => b.id - a.id).map((task) => (
        <TaskItem 
        key={task.id} 
        task={task} />
      ))
      }
    </ul>
  );
}

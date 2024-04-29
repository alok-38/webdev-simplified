// TodoList.js
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Finish homework", done: false },
    { id: 2, text: "Go to the gym", done: false },
    { id: 3, text: "Buy groceries", done: false },
  ]);

  const addTask = (newTaskText) => {
    if (newTaskText.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTaskText, done: false }]);
    }
  };

  const toggleTaskStatus = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="mt-5 max-w-md mx-auto">
      {/* Pass addTask function as a prop */}
      <TodoInput addTask={addTask} />
      <ul>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            toggleTaskStatus={toggleTaskStatus}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

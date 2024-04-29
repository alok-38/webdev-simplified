// TodoInput.jsx
import { useState } from "react";

export default function TodoInput({ addTask }) {
  const [newTaskText, setNewTaskText] = useState("");

  const handleInputChange = (e) => {
    setNewTaskText(e.target.value);
  };

  const handleAddTask = () => {
    // Call the addTask function passed as prop
    addTask(newTaskText);
    setNewTaskText("");
  };

  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        className="w-full px-3 py-2 mr-2 border rounded-md"
        placeholder="Add a new task"
        value={newTaskText}
        onChange={handleInputChange}
      />
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        onClick={handleAddTask}
      >
        Add
      </button>
    </div>
  );
}

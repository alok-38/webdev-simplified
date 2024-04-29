export default function TodoItem({ task, toggleTaskStatus, deleteTask }) {
  return (
    <li
      className={`flex items-center justify-between py-2 ${
        task.done ? "line-through text-gray-500" : ""
      }`}
    >
      <span onClick={() => toggleTaskStatus(task.id)}>{task.text}</span>
      <button
        className="px-2 py-1 text-red-500 hover:text-red-600"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  );
}

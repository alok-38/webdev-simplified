import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center gap-10">
        <input
          className="w-52 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 transition duration-300 ease-in-out hover:border-indigo-500"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add new todo"
        />
        <button
          className="px-8 py-4 border border-solid border-indigo-600 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 hover:border-indigo-700 hover:text-white transition duration-300 ease-in-out"
          type="submit"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
}

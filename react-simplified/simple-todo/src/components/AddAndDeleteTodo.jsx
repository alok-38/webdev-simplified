import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useState } from "react";

export default function AddAndDeleteTodo() {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
    };
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="todo-app">
      <h1 className="my-20 text-5xl font-semibold">Todo App</h1>
      <TodoForm onAdd={addTodo} />
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </div>
    </div>
  );
}

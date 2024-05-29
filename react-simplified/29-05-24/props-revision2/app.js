const appElement = document.getElementById("app");

// TodoListItem component
function TodoListItem({ children, isComplete }) {
  return (
    <div>
      <input type="checkbox" defaultChecked={isComplete} />
      <label>{children}</label>
    </div>
  );
}

// TodoList component
function TodoList({ todos }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoListItem key={index} isComplete={todo.isComplete}>
          {todo.name}
        </TodoListItem>
      ))}
    </div>
  );
}

// Example todo items
const todos = [
  { name: "Learn React", isComplete: true },
  { name: "Build a Todo App", isComplete: false },
  { name: "Master JavaScript", isComplete: true }, // Changed to true
];

// Rendering the TodoList component with the todo items
const root = ReactDOM.createRoot(appElement);
root.render(<TodoList todos={todos} />);

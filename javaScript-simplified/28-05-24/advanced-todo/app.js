// Add todos
// Delete todos
// Complete todos
// Use browser storage to persist the data

const form = document.getElementById("new-todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("list");
const template = document.getElementById("list-item-template");

let todos = loadTodos();
todos.forEach((todo) => addTodoItem(todo));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoText = input.value.trim();
  if (todoText !== "") {
    const newTodo = { text: todoText, completed: false };
    todos.push(newTodo);
    saveTodos(todos);
    addTodoItem(newTodo);
    input.value = "";
    input.focus();
  }
});

function addTodoItem(todo) {
  const clone = template.content.cloneNode(true);
  const listItem = clone.querySelector(".list-item");
  const checkbox = listItem.querySelector("[data-list-item-checkbox]");
  const span = listItem.querySelector("[data-list-item-text]");
  const deleteButton = listItem.querySelector("[data-button-delete]");

  span.textContent = todo.text;
  checkbox.checked = todo.completed;
  if (todo.completed) {
    span.style.textDecoration = "line-through";
  }

  checkbox.addEventListener("change", () => {
    todo.completed = checkbox.checked;
    saveTodos(todos);
    span.style.textDecoration = todo.completed ? "line-through" : "none";
  });

  deleteButton.addEventListener("click", () => {
    todos = todos.filter((t) => t !== todo);
    saveTodos(todos);
    listItem.remove();
  });

  list.appendChild(listItem);
}

function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
  const todosJSON = localStorage.getItem("todos");
  return todosJSON ? JSON.parse(todosJSON) : [];
}

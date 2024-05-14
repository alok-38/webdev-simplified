const ulElement = document.querySelector("ul");
const addTaskInputElement = document.getElementById("add-task");
const addNoteInputElement = document.getElementById("add-note");
const addTaskButton = document.querySelector(".add__task--btn");
const clearNoteButton = document.querySelector(".clear__note--btn");

// Array to store to-do items with their associated notes
const todoList = [];

const acceptAndAddTasks = (e) => {
  e.preventDefault();
  const taskInput = addTaskInputElement.value.trim();
  const noteInput = addNoteInputElement.value.trim();

  //   Create an object to store the task and its associated note
  const todoItem = { task: taskInput, note: noteInput };

  //   Add the object to the todoList array
  todoList.push(todoItem);

  // Render the updated to-do list
  renderTodoList();

  // Clear input fields
  addTaskInputElement.value = "";
  addNoteInputElement.value = "";
};

const renderTodoList = () => {
  // Clear the existing list items
  ulElement.innerHTML = "";
  // Render each todo item along with its associated note
  todoList.forEach((item) => {
    const liElement = document.createElement("li");
    liElement.textContent = item.task;
  });
};

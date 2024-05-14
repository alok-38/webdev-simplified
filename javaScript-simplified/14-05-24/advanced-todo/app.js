const taskListElement = document.getElementById("task-list");
const noteListElement = document.getElementById("note-list");
const addTaskInputElement = document.getElementById("add-task");
const addNoteInputElement = document.getElementById("add-note");
const addTaskButton = document.querySelector(".add__task--btn");
const addNoteButton = document.querySelector(".add__note--btn");
const clearCompletedButton = document.querySelector(".clear__completed--btn");

// Array to store to-do items with their associated notes
const todoList = [];

const acceptAndAddTasks = (e) => {
  e.preventDefault();
  const taskInput = addTaskInputElement.value.trim();
  const noteInput = addNoteInputElement.value.trim();

  // Create an object to store the task and its associated note
  const todoItem = { task: taskInput, note: noteInput };

  // Add the object to the todoList array
  todoList.push(todoItem);

  // Render the updated to-do list
  renderTodoList();

  // Clear input fields
  addTaskInputElement.value = "";
  addNoteInputElement.value = "";
};

const renderTodoList = () => {
  // Clear the existing list items
  taskListElement.innerHTML = "";
  noteListElement.innerHTML = "";

  // Render each todo item along with its associated note
  todoList.forEach((item) => {
    const taskLiElement = document.createElement("li");
    taskLiElement.textContent = item.task;
    taskListElement.appendChild(taskLiElement);

    const noteLiElement = document.createElement("li");
    noteLiElement.textContent = item.note;
    noteListElement.appendChild(noteLiElement);
  });
};

const clearCompleted = () => {
  // Clear both task and note lists
  todoList.length = 0;
  renderTodoList();
};

addTaskButton.addEventListener("click", acceptAndAddTasks);
addNoteButton.addEventListener("click", acceptAndAddTasks);
clearCompletedButton.addEventListener("click", clearCompleted);

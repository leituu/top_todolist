import UI from "./UI.js";
import Task from "./Task.js";
import TaskLibrary from "./TaskLibrary.js";

const library = new TaskLibrary();

// views
const mainViews = document.querySelectorAll(".views-list li");
const projectViews = document.querySelector(".projects-list");
const viewTitle = document.querySelector(".todo-project");

// buttons
const addProjectBtn = document.querySelector(".add-project button");
const addTaskBtn = document.querySelector(".add-task button");
const cancelBtn = document.querySelectorAll(".cancel");

// forms
const addProjectForm = document.querySelector(".todo-project-form");
const addTaskForm = document.querySelector(".todo-task-form");

// form buttons & inputs
// // inputs
const projectName = document.querySelector("#project-name");
const taskName = document.querySelector("#task-name");
const taskDesc = "";
const taskPriority = document.querySelector("#task-priority");
const taskDueDate = document.querySelector("#task-due-date");
const taskProject = document.querySelector(".todo-project");

// // buttons
const addProjectFormBtn = document.querySelector("#addNewProject");
const addTaskFormBtn = document.querySelector("#addNewTask");

// task List
const taskList = document.querySelector(".todo-list table tbody");

// Listeners

// DOM loads for the first time
document.addEventListener("DOMContentLoaded", () => {
  // renders all tasks by default when loading the page
  const tasks = library.getTasks("Home");
  UI.renderTasks(tasks);
});

// Switch main views
mainViews.forEach((view) => {
  view.addEventListener("click", () => {
    // changes the view
    viewTitle.innerHTML = view.innerText;
    UI.displayView(view.innerText, library);
  });
});

// Switch project views
projectViews.addEventListener("click", (e) => {
  // changes the project view
  viewTitle.innerHTML = e.target.innerText;
  UI.displayProjects(e.target.innerText, library);
});

// Show add project form
addProjectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  UI.showForm(addProjectForm);
});

// Add project
addProjectFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  UI.addProject(projectName.value);
  UI.hideForm(addProjectForm);
});

// Show add task form
addTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  UI.showForm(addTaskForm);
});

// Add task
addTaskFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const taskNameCap =
    taskName.value.charAt(0).toUpperCase() + taskName.value.slice(1);
  const task = new Task(
    taskNameCap,
    taskDesc,
    taskPriority.value,
    taskProject.innerText,
    taskDueDate.value
  );
  library.addTask(task);
  UI.addTask(task);
  UI.hideForm(addTaskForm);
});

// Close Project/Task form
cancelBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const sect = e.target.parentElement.parentElement.parentElement;
    UI.hideForm(sect);
  });
});

// change task status or remove task
taskList.addEventListener("click", (e) => {
  if (e.target.innerText === "delete") {
    UI.removeTask(taskList, e.target.parentElement.parentElement);
  } else if (e.target.innerText === "done") {
    console.log(e.target.innerText);
  }
});

// display task info
taskList.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("task-name") &&
    e.target.innerText !== "Task"
  ) {
    console.log(e.target.innerText);
  }
});

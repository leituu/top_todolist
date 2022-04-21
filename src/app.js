import UI from "./UI.js";
import Task from "./Task.js";
import TaskLibrary from "./TaskLibrary.js";

let library = new TaskLibrary();

// views
const views = document.querySelectorAll(".views-list li");
const project = document.querySelector(".projects-list");
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
const projName = document.querySelector("#project-name");
const taskTitle = document.querySelector("#task-name");
const taskDesc = "";
const taskPriority = document.querySelector("#task-priority");
const taskDueDate = document.querySelector("#task-due-date");
const taskProject = document.querySelector(".todo-project");

// // buttons
const addProjectFormBtn = document.querySelector("#addNewProject");
const addTaskFormBtn = document.querySelector("#addNewTask");

// task List
const taskList = document.querySelector(".todo-list table tbody");

document.addEventListener("DOMContentLoaded", () => {
  // renders all tasks by default when loading the page
  const tasks = library.getTasks("Home");
  UI.renderTasks(tasks);
});

views.forEach((view) => {
  view.addEventListener("click", (e) => {
    // changes the view
    viewTitle.innerHTML = view.innerText;
    UI.displayView(view.innerText, library);
  });
});

project.addEventListener("click", (e) => {
  // changes the project view
  viewTitle.innerHTML = e.target.innerText;
  UI.displayProjects(e.target.innerText, library);
});

addProjectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  UI.showForm(addProjectForm);
});

addProjectFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  UI.addProject(projName.value);
  UI.hideForm(addProjectForm);
});

addTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  UI.showForm(addTaskForm);
});

addTaskFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let taskTitleCap =
    taskTitle.value.charAt(0).toUpperCase() + taskTitle.value.slice(1);
  let task = new Task(
    taskTitleCap,
    taskDesc,
    taskPriority.value,
    taskProject.innerText,
    taskDueDate.value
  );
  library.addTask(task);
  UI.addTask(task);
  UI.hideForm(addTaskForm);
});

cancelBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let sect = e.target.parentElement.parentElement.parentElement;
    UI.hideForm(sect);
  });
});

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

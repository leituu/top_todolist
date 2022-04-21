class UI {
  static displayView(view, library) {
    const tasks = library.getTasks(view);
    UI.renderTasks(tasks);
  }

  static displayProjects(project, library) {
    const projects = library.getTasksByProject(project);
    UI.renderTasks(projects);
  }

  static renderTasks(tasks) {
    const tasksTable = document.querySelector(".todo-list table tbody");
    tasksTable.innerHTML = `
        <tr>
          <th class="task-name">Task</th>
          <th class="task-due-date">Due Date</th>
          <th class="task-priority">Priority</th>
          <th class="">Status</th>
        </tr>`;
    tasks.forEach((task) => {
      const row = `
        <tr class="todo-task" data-id=${task.id}>
          <td class="task-name">${task.title}</td>
          <td class="task-due-date">${task.dueDate}</td>
          <td class="task-priority">${task.priority}</td>
          <td class="task-status">${task.status}</td>
          <td class="task-status-change">
            <span class="material-icons-outlined"> done </span>
          </td>
          <td class="task-delete">
            <span class="material-icons-outlined"> delete </span>
          </td>
        </tr>`;
      tasksTable.innerHTML += row;
    });
  }

  static addProject(name) {
    const projectList = document.querySelector(".projects-list");
    let li = document.createElement("li");
    li.innerText = name;
    projectList.appendChild(li);
  }

  static removeProject() {}

  static showForm(section) {
    section.classList.remove("hidden");
  }

  static hideForm(section) {
    section.classList.add("hidden");
  }

  static addTask(task) {
    const tasksTable = document.querySelector(".todo-list table tbody");
    const row = `
        <tr class="todo-task" data-id=${task.id}>
          <td class="task-name">${task.title}</td>
          <td class="task-due-date">${task.dueDate}</td>
          <td class="task-priority">${task.priority}</td>
          <td class="task-status">${task.status}</td>
          <td class="task-status-change">
            <span class="material-icons-outlined"> done </span>
          </td>
          <td class="task-delete">
            <span class="material-icons-outlined"> delete </span>
          </td>
        </tr>`;
    tasksTable.innerHTML += row;
  }

  static removeTask(taskTable, task) {
    taskTable.removeChild(task);
  }

  static displayTaskInfo() {}

  static changeTaskStatus() {}

  static sortTasks() {}
}

class Task {
  constructor(title, description, priority, project, dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.status = "Pending";
    this.dueDate = dueDate;
    if (project === "Home" || project === "Today" || project === "Week") {
      this.project = "";
    } else {
      this.project = project;
    }
    this.id = Math.floor(Math.random() * 1000);
  }

  updateTaskStatus(status) {
    this.status = status;
  }

  getDate() {
    return this.dueDate;
  }

  setId(id) {
    this.id = id;
  }
}

class TaskLibrary {
  constructor() {
    this.tasks = [
      {
        title: "Task 1",
        description: "Task 1 description",
        priority: "High",
        status: "Pending",
        project: "Project-1",
        dueDate: "2020-01-01",
        id: 241,
      },
      {
        title: "Task 2",
        description: "Task 2 description",
        priority: "Medium",
        status: "Pending",
        project: "Project-2",
        dueDate: "2020-02-01",
        id: 238,
      },
      {
        title: "Task 3",
        description: "Task 3 description",
        priority: "Low",
        status: "Pending",
        project: "Project-3",
        dueDate: "2022-04-20",
        id: 237,
      },
      {
        title: "Task 3",
        description: "Task 3 description",
        priority: "Low",
        status: "Pending",
        project: "",
        dueDate: "2020-03-01",
        id: 235,
      },
      {
        title: "Task 3",
        description: "Task 3 description",
        priority: "Low",
        status: "Pending",
        project: "",
        dueDate: "2020-03-01",
        id: 234,
      },
      {
        title: "Task 3",
        description: "Task 3 description",
        priority: "Low",
        status: "Pending",
        project: "Project-4",
        dueDate: "2020-03-01",
        id: 233,
      },
      {
        title: "Task 3",
        description: "Task 3 description",
        priority: "Low",
        status: "Pending",
        project: "Project-4",
        dueDate: "2020-03-01",
        id: 231,
      },
      {
        title: "Task 3",
        description: "Task 3 description",
        priority: "Low",
        status: "Pending",
        project: "Project-4",
        dueDate: "2020-03-01",
        id: 231,
      },
    ];
    // if (localStorage.getItem("taskLibrary") === null) {
    //   this.tasks = [];
    //   localStorage.setItem("taskLibrary", JSON.stringify(this.tasks));
    // } else {
    //   this.tasks = JSON.parse(localStorage.getItem("taskLibrary"));
    // }
  }

  addTask(task) {
    // check if task id already exists
    for (let i = 0; i < this.tasks.length; i++) {
      if (task.id === this.tasks[i].id) {
        let newId = Math.floor(Math.random() * 1000);
        console.log(newId);
        task.setId(newId);
      }
    }
    console.log(task);
    this.tasks.push(task);
  }

  getTasks(view) {
    // returns a filtered/unfiltered array of tasks
    switch (view) {
      case "Home":
        return this.tasks;
        break;
      case "Today":
        return this.getTodayTasks();
        break;
      case "Week":
        return this.getWeekTasks();
        break;
      default:
        break;
    }
  }

  getTodayTasks() {
    return this.tasks.filter((task) => {
      return task.dueDate === new Date().toISOString().slice(0, 10);
    });
  }

  getWeekTasks() {
    return this.tasks.filter((task) => {
      return task.dueDate >= new Date().toISOString().slice(0, 10);
    });
  }

  getTasksByProject(project) {
    return this.tasks.filter((task) => task.project === project);
  }
}

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

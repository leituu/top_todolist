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

export default UI;

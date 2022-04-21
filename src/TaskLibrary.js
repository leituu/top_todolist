/* eslint-disable comma-dangle */
class TaskLibrary {
  constructor() {
    /* this.tasks = [];
    // this.tasks = [
    //   {
    //     title: "Task 1",
    //     description: "Task 1 description",
    //     priority: "High",
    //     status: "Pending",
    //     project: "Project-1",
    //     dueDate: "2020-01-01",
    //     id: 241,
    //   },
    //   {
    //     title: "Task 2",
    //     description: "Task 2 description",
    //     priority: "Medium",
    //     status: "Pending",
    //     project: "Project-2",
    //     dueDate: "2020-02-01",
    //     id: 238,
    //   },
    //   {
    //     title: "Task 3",
    //     description: "Task 3 description",
    //     priority: "Low",
    //     status: "Pending",
    //     project: "Project-3",
    //     dueDate: "2022-04-20",
    //     id: 237,
    //   },
    //   {
    //     title: "Task 3",
    //     description: "Task 3 description",
    //     priority: "Low",
    //     status: "Pending",
    //     project: "",
    //     dueDate: "2020-03-01",
    //     id: 235,
    //   },
    //   {
    //     title: "Task 3",
    //     description: "Task 3 description",
    //     priority: "Low",
    //     status: "Pending",
    //     project: "",
    //     dueDate: "2020-03-01",
    //     id: 234,
    //   },
    //   {
    //     title: "Task 3",
    //     description: "Task 3 description",
    //     priority: "Low",
    //     status: "Pending",
    //     project: "Project-4",
    //     dueDate: "2020-03-01",
    //     id: 233,
    //   },
    //   {
    //     title: "Task 3",
    //     description: "Task 3 description",
    //     priority: "Low",
    //     status: "Pending",
    //     project: "Project-4",
    //     dueDate: "2020-03-01",
    //     id: 231,
    //   },
    // ];*/
    if (localStorage.getItem("taskLibrary") === null) {
      this.tasks = [];
      localStorage.setItem("taskLibrary", JSON.stringify(this.tasks));
    } else {
      this.tasks = JSON.parse(localStorage.getItem("taskLibrary"));
    }
  }

  addTask(task) {
    // check if task id already exists
    for (let i = 0; i < this.tasks.length; i++) {
      if (task.id === this.tasks[i].id) {
        const newId = Math.floor(Math.random() * 1000);
        task.setId(newId);
      }
    }
    this.tasks.push(task);
    this.updateStorage();
  }

  removeTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== parseInt(id));
    this.updateStorage();
  }

  getTask(id) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === parseInt(id)) {
        return this.tasks[i];
      }
    }
  }

  getTasks(view) {
    // returns a filtered/unfiltered array of tasks
    switch (view) {
      case "Home":
        return this.tasks;
      case "Today":
        return this.getTodayTasks();
      case "Week":
        return this.getWeekTasks();
      default:
        break;
    }
  }

  getProjects() {
    const projects = [];
    this.tasks.forEach((task) => {
      if (task.project !== "") {
        if (!projects.includes(task.project)) {
          projects.push(task.project);
        }
      }
    });
    return projects;
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

  updateStorage() {
    localStorage.setItem("taskLibrary", JSON.stringify(this.tasks));
  }

  updateTaskStatus(id, status) {
    const task = this.getTask(id);
    if (status === "Completed") {
      task.status = "Pending";
    } else {
      task.status = "Completed";
    }
    this.updateStorage();
  }
}

export default TaskLibrary;

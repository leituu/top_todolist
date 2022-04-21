/* eslint-disable comma-dangle */
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
        const newId = Math.floor(Math.random() * 1000);
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
      case "Today":
        return this.getTodayTasks();
      case "Week":
        return this.getWeekTasks();
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

export default TaskLibrary;

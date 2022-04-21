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

export default Task;

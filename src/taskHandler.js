class Task {
  constructor(name, date, urgency, description) {
    this.name = name;
    this.date = date;
    this.urgency = urgency;
    this.description = description;
  }
}

function createNewTask(name) {
  let name = new Task(name, date, urgency, description);
  return name;
}

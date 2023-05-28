function createTaskCard(currentTask, currentProject, homeProject) {
  const taskCard = document.createElement("div");
  const titleDescriptionContainer = document.createElement("div");
  const taskContent = document.createElement("div");
  const leftContainer = document.createElement("div");
  const taskName = document.createElement("h3");
  const taskDate = document.createElement("h3");
  const taskUrgency = document.createElement("h3");
  const taskDescription = document.createElement("h3");
  const doneBtn = document.createElement("button");

  taskCard.setAttribute("id", "t_" + currentTask.name);
  taskCard.classList.add("task_card");
  titleDescriptionContainer.classList.add("task_title_description");

  taskContent.classList.add("task_content");
  doneBtn.classList.add("done_btn");
  leftContainer.classList.add("left_task_container");
  taskCard.appendChild(leftContainer);
  leftContainer.appendChild(doneBtn);
  leftContainer.appendChild(titleDescriptionContainer);
  taskCard.appendChild(taskContent);
  titleDescriptionContainer.appendChild(taskName);
  taskName.innerText = "Task: " + currentTask.name;
  titleDescriptionContainer.appendChild(taskDescription);
  doneBtn.addEventListener("click", () => {
    taskName.classList.toggle("done");
    taskDescription.classList.toggle("done");
    doneBtn.classList.toggle("marked_done");
  });

  if (currentTask.date !== "") {
    taskDate.innerText = "Due Date: " + currentTask.date;
    taskContent.appendChild(taskDate);
  }
  taskUrgency.innerText = currentTask.urgency.toUpperCase();
  if (currentTask.urgency === "urgent") {
    taskUrgency.style.color = "red";
  } else if (currentTask.urgency === "moderate") {
    taskUrgency.style.color = "orange";
  } else {
    taskUrgency.style.color = "#2ec4b6";
  }
  taskContent.appendChild(taskUrgency);
  taskDescription.innerText = "Description: " + currentTask.description;

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.setAttribute("id", currentTask.name + "_delete");
  deleteButton.classList.add("delete_task");
  taskContent.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    taskCard.remove();
    removeTaskFromArray(currentTask, currentProject, homeProject);
  });
  return taskCard;
}

function removeTaskFromArray(currentTask, currentProject, homeProject) {
  if (currentProject.name !== homeProject.name) {
    for (let i = 0; i < currentProject.taskArray.length; i++) {
      if (currentProject.taskArray[i] === currentTask) {
        currentProject.taskArray.splice(i, 1);
      }
    }
    for (let i = 0; i < homeProject.taskArray.length; i++) {
      if (homeProject.taskArray[i] === currentTask) {
        homeProject.taskArray.splice(i, 1);
      }
    }
  } else {
    for (let i = 0; i < homeProject.taskArray.length; i++) {
      if (homeProject.taskArray[i] === currentTask) {
        homeProject.taskArray.splice(i, 1);
      }
    }
  }
  console.log("fire");
  console.log(homeProject);
  console.log(currentProject);
  console.log(currentTask);
}

function displayTasksByProject(
  currentProject,
  currentProjectNameNoSpaces,
  homeProject
) {
  let taskCard;
  clearTaskDisplay(currentProjectNameNoSpaces);
  const currentContainer = document.getElementById(
    currentProjectNameNoSpaces + "_container"
  );
  for (let i = 0; i < currentProject.taskArray.length; i++) {
    taskCard = createTaskCard(
      currentProject.taskArray[i],
      currentProject,
      homeProject
    );
    currentContainer.appendChild(taskCard);
  }
}

function clearTaskDisplay(currentProjectNameNoSpaces) {
  const currentContainer = document.getElementById(
    currentProjectNameNoSpaces + "_container"
  );
  currentContainer.remove();
  const newTaskContainer = document.createElement("div");
  const taskContent = document.getElementById("task_content");
  newTaskContainer.setAttribute(
    "id",
    currentProjectNameNoSpaces + "_container"
  );
  newTaskContainer.classList.add("project_tasks");
  taskContent.appendChild(newTaskContainer);
}

function replaceTaskContainer(projectNameNoSpaces) {
  const currentTaskContainer = document.querySelector(".project_tasks");
  currentTaskContainer.remove();

  const newTaskContainer = document.createElement("div");
  const taskContent = document.getElementById("task_content");
  newTaskContainer.setAttribute("id", projectNameNoSpaces + "_container");
  newTaskContainer.classList.add("project_tasks");
  taskContent.appendChild(newTaskContainer);
}

export default {
  createTaskCard,
  displayTasksByProject,
  replaceTaskContainer,
};

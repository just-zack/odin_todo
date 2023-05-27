function createTaskCard(currentTask, currentProject, homeProject) {
  const taskCard = document.createElement("div");
  const taskContent = document.createElement("div");
  const taskRow1 = document.createElement("div");
  const taskRow2 = document.createElement("div");
  const taskName = document.createElement("h3");
  const taskDate = document.createElement("h3");
  const taskUrgency = document.createElement("h3");
  const taskDescription = document.createElement("h3");
  const doneBtn = document.createElement("button");

  taskCard.setAttribute("id", "t_" + currentTask.name);
  taskCard.classList.add("task_card");
  taskContent.classList.add("task_content");
  doneBtn.classList.add("done_btn");
  taskCard.appendChild(doneBtn);
  taskCard.appendChild(taskName);
  taskCard.appendChild(taskRow1);
  doneBtn.addEventListener("click", () => {
    taskName.classList.toggle("done");
  });

  taskCard.appendChild(taskContent);
  taskRow1.classList.add("task_row");
  taskRow2.classList.add("task_row");
  taskName.innerText = "Task: " + currentTask.name;
  taskDate.innerText = "Due Date: " + currentTask.date;
  taskDate.style.color = "#2ec4b6git p";
  taskRow1.appendChild(taskDate);
  taskContent.appendChild(taskRow1);
  taskUrgency.innerText = currentTask.urgency;
  taskRow1.appendChild(taskUrgency);
  taskContent.appendChild(taskRow2);
  taskDescription.innerText = "Description: " + currentTask.description;
  taskRow2.appendChild(taskDescription);

  const deleteButton = document.createElement("button");

  deleteButton.innerText = "Delete";
  deleteButton.setAttribute("id", currentTask.name + "_delete");
  deleteButton.classList.add("delete_task");
  taskCard.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    taskCard.remove();
    console.log(homeProject);
    removeTaskFromArray(currentTask, currentProject, homeProject);
  });
  return taskCard;
}

function removeTaskFromArray(currentTask, currentProject, homeProject) {
  console.log(homeProject);
  console.log(currentProject);
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

document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
          const taskItem = document.createElement("li");
          taskItem.classList.add("task-item");

          const taskTextSpan = document.createElement("span");
          taskTextSpan.classList.add("task-text");
          taskTextSpan.textContent = taskText;

          const completeCheckbox = document.createElement("input");
          completeCheckbox.type = "checkbox";
          completeCheckbox.classList.add("complete-checkbox");
          completeCheckbox.addEventListener("change", () => {
              taskItem.classList.toggle("completed");
          });

          const deleteBtn = document.createElement("button");
          deleteBtn.textContent = "Delete";
          deleteBtn.classList.add("delete-btn");
          deleteBtn.addEventListener("click", () => {
              taskItem.remove();
          });

          taskItem.appendChild(completeCheckbox);
          taskItem.appendChild(taskTextSpan);
          taskItem.appendChild(deleteBtn);
          taskList.appendChild(taskItem);

          taskInput.value = "";
      }
  });
});

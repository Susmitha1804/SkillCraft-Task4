const taskInput = document.getElementById("taskText");
const taskDate = document.getElementById("taskDate");
const addBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const themeSelector = document.getElementById("themeSelector");

// Set default theme from localStorage
document.body.className = localStorage.getItem("theme") || "baby-pink";
themeSelector.value = localStorage.getItem("theme") || "baby-pink";

themeSelector.addEventListener("change", () => {
  document.body.className = themeSelector.value;
  localStorage.setItem("theme", themeSelector.value);
});

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  const taskTime = taskDate.value;

  if (!taskText || !taskTime) {
    alert("Please enter task and date/time.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <div class="task-info">
      <strong>${taskText}</strong><br/>
      <small>${new Date(taskTime).toLocaleString()}</small><br/>
      <span class="status">Status: <b>Pending</b></span>
    </div>
    <div class="task-actions">
      <button onclick="markDone(this)">✔ Done</button>
      <button onclick="deleteTask(this)">🗑 Delete</button>
    </div>
  `;
  taskList.appendChild(li);

  taskInput.value = "";
  taskDate.value = "";
});

function markDone(btn) {
  const task = btn.closest("li").querySelector(".status b");
  task.textContent = "Done";
  task.style.color = "green";
}

function deleteTask(btn) {
  const li = btn.closest("li");
  li.remove();
}

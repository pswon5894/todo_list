const priorityInput = document.getElementById("todo-priority")
const titleInput = document.getElementById("todo-title");
const contentInput = document.getElementById("todo-content");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

addBtn.addEventListener("click", () => {
  const priority = priorityInput.value.trim();
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (priority !== "" && title !== "" && content !== "") {
    const li = document.createElement("li");
    li.textContent = `${priority} - ${title} - ${content}`;

    // 삭제 버튼
    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.onclick = () => li.remove();

    li.appendChild(delBtn);
    list.appendChild(li);
    
    priorityInput.value = "";
    titleInput.value = "";
    contentInput.value = "";
  }
});
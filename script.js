const titleInput = document.getElementById("todo-title");
const contentInput = document.getElementById("todo-content");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

// 우선순위 매핑
const priorityMap = {"긴급":3, "보통":2, "여유":1};

addBtn.addEventListener("click", () => {

  // 선택된 라디오 버튼 가져오기
  const priorityRadio = document.querySelector('input[name="priority"]:checked');
  if (!priorityRadio) {
    alert("우선순위를 선택하세요!");
    return;
  }

  const priority = priorityRadio.value;
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (title !== "" && content !== "") {
    const li = document.createElement("li");
    li.textContent = `${priority} - ${title} - ${content}`;

    // 정렬용 데이터 저장
    li.dataset.priority = priorityMap[priority];

    // 우선순위에 따라 적절한 위치에 삽입
    let inserted = false;
    for (const child of list.children) {
      if (Number(child.dataset.priority) < Number(li.dataset.priority)) {
        list.insertBefore(li, child);
        inserted = true;
        break;
      }
    }
    if (!inserted) {
      list.appendChild(li); // 끝에 추가
    }

    //수정 버튼 필요?

    // 삭제 버튼
    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.onclick = () => li.remove();

    li.appendChild(delBtn);
    
    priorityRadio.checked = false;
    titleInput.value = "";
    contentInput.value = "";
  }
});

// 저장은 localStorage로 저장 구현이 가능하다고 한다
// 정렬 효율 o(n) 매번 비교해야해서
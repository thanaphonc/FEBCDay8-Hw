const ToDoLists = document.getElementById("todo-lists");

function AddToDoItems() {
  let input = document.getElementById("input-todo");
  const li = document.createElement("li");
  const item = `<div>${input.value}</div><button type="button" class="btn-delete" onclick="this.parentNode.style.display='none';">ลบ</button>`;
  li.innerHTML = item;
  ToDoLists.appendChild(li);
  input.value = "";
}

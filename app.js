// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
// Functions
function addTodo(event) {
  event.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // create Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // Check Mark
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class ="fas fa-check"></i>';
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);
  // Trash Mark
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class ="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // Append to-List
  todoList.appendChild(todoDiv);
  //Clear Todo input value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  // Delete Item
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    // Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  // Check Mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
        
    }
  });
}

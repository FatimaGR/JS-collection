const input = document.getElementById("new-task");
const button = document.getElementById("button");
const list = document.getElementById("list");

let noTasks = document.createElement("p");
noTasks.classList.add("center");
noTasks.innerText = "You don't have tasks";

function countTasks(){
  if(list.childElementCount == 0){
    list.appendChild(noTasks);
  } else {
    noTasks.remove();
  }
}

function completedTask(task){
  let taskText = task.target.nextSibling;
  taskText.classList.toggle("completed");
}

function deleteTask(task){
  let taskSelected = task.target.parentNode;
  taskSelected.remove();
  countTasks();
}

function addTask(){
  if (input.value){
    let newTask = document.createElement("div");
    newTask.classList.add("task");
  
    let text = document.createElement("p");
    text.innerText = input.value;
    
    let check = document.createElement("i");
    check.classList.add("bx", "bx-check-square");
    check.addEventListener("click", completedTask);
    
    let trash = document.createElement("i");
    trash.classList.add("bx", "bx-trash");
    trash.addEventListener("click", deleteTask);
  
    newTask.appendChild(check);
    newTask.appendChild(text);
    newTask.appendChild(trash);
  
    list.appendChild(newTask);
  }
  countTasks();
}

countTasks();
button.addEventListener("click", addTask);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter"){
    addTask();
  }
})
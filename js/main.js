let btnThem = document.querySelector("button");
let taskOne = document.querySelector("#newTask");

let comeArr = [];


let come = getTaskFromLocalStorage();



let doItTask = document.querySelector("#todo");
let doneTask = document.querySelector("#completed");


rendercome(come);

btnThem.addEventListener("click", function () {
  if (!taskOne.value) {
    alert("điền vào đi đã !! ơ kìa...!");
    return false;
  }

  let come = getTaskFromLocalStorage();

  come.push({ name: taskOne.value });

  taskOne.value = "";

  localStorage.setItem("come", JSON.stringify(come));

  rendercome(come);
});

function deleteTask(id) {
  let come = getTaskFromLocalStorage();
  come.splice(id, 1);
  localStorage.setItem("come", JSON.stringify(come));
  rendercome(getTaskFromLocalStorage());
}

function rendercome(come = []) {
  let content = '<ul class="todo" id="todo">';

  come.forEach((task, index) => {
    content += `<li>
      <div class="task-name">${task.name}</div>
      <a href="#" onclick="deleteTask(${index})"><i class="fa-solid fa-trash-can"></i></a>
      <a href="#" onclick="donecome(${index})"><i class="fa-regular fa-circle-check"></i></a>
    </li>`;
  });

  content += "</ul>";

  document.querySelector("#result").innerHTML = content;
}

function getTaskFromLocalStorage() {
  return localStorage.getItem("come")
    ? JSON.parse(localStorage.getItem("come"))
    : [];
}

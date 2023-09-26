let input = document.getElementById("input_box");
let taskList = document.getElementById("list_container");
let taskResult = document.getElementById("task_result");
let taskButton = document.getElementById("add_task_button");

taskList.style.backgroundImage ="url(./img/task.png)"
taskList.style.backgroundPosition ="center"
taskList.style.backgroundSize ="contain"


taskButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (input.value == 0 || input.value == "") {
    setTimeout(() => {
      taskResult.innerText = "empty task!";
      taskResult.style.display = "block";
    }, 1);

    setTimeout(() => {
      taskResult.style.display = "none";
    }, 2000);
  } else {
    // taskList.style.background = "none";
    var li = document.createElement("li");
    li.innerText = input.value;
    li.classList.add('list_items')
    taskList.appendChild(li);
    input.value = "";
    setTimeout(() => {
      taskResult.innerText = "task added!";

      taskResult.style.display = "block";
    }, 1);
    setTimeout(() => {
      taskResult.style.display = "none";
    }, 1000);
    li.addEventListener("click", () => {
      li.classList.toggle("checked");
    });
  }
});



taskList.addEventListener('touchstart',()=>{

  document.querySelector('.scroll').innerHTML = "Thank U For Using !"
})






           



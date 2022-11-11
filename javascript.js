//Does not make sure there is input yet
//Does not have toggleToDo work
function makeListBox() {
  let toDoBox = ``;
  const toDoContainer = document.getElementById('todo-container');
  const title = document.getElementById("title");
  const description = document.getElementById("description");

  toDoBox += `<div class="todo" onlick="toggleToDo(event)">`;
  toDoBox += `<div class="todo-header">`;
  toDoBox += `<h2>${title.value}</h2>`;
  toDoBox += `<button aria-label="delete item" onclick="removeToDo(event)">X</button>`;
  toDoBox += `</div>`;
  toDoBox += `<div class="todo-description">${description.value}</div>`;
  toDoBox += `</div>`;

  toDoContainer.insertAdjacentHTML("beforeend", toDoBox);
}

/**
 * Function that should add a TODO HTML block to the DOM using
 * the appropriate data from the form when the form is submitted
 * @param event form submit event
 */
function addToDo(event) {
  event.preventDefault();
  const btn = document.getElementById('submit');

  btn.addEventListener("click", makeListBox());

}

/**
 * Method to add a class that marks the TODO as
 * completed, ie greyed out when TODO block is clicked. If
 * block is already completed (ie clicked before), then it
 * should remove the class.
 * @param event the onclick event
 */
function toggleToDo(event) {
  let targetElement = getRootElement(event.currentTarget);
  //Should only have to single click, and escape by clicking outside the box -- come back to fix
  targetElement.addEventListener("click", (event) => {
    targetElement.classList.toggle("completed");
  })
}

/**
 * Function to remove a TODO block from the HTML when the 'X' button is clicked
 * @param event the onclick event
 */
function removeToDo(event) {
  let todoElement = getRootElement(event.currentTarget);

  todoElement.addEventListener("click", (event) => {
    var el = todoElement;
    el.remove();
  })
}

/**
 * Function that gets the main div of a TODO block, denoted by the 'todo' class
 * Not recommended to change this method.
 * @param element the element to start searching from
 * @returns TODO block element or null
 */
function getRootElement(element) {
  let targetElement = element;
  while (targetElement && !targetElement.classList.contains("todo")) {
    targetElement = targetElement.parent
      ? targetElement.parent
      : targetElement.parentElement;
  }
  return targetElement;
}

addToDo();
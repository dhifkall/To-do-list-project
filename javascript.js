//Does not make sure there is input yet
function makeListBox(event) {
  // let toDoBox = ``;
  const toDoContainer = document.getElementById('todo-container');
  const title = document.getElementById("title");
  const description = document.getElementById("description");

  let toDoDiv = document.createElement('div');
  toDoDiv.className = "todo";
  toDoDiv.addEventListener("click", toggleToDo);
  let header = document.createElement('div');
  header.className = 'todo-header';
  toDoDiv.appendChild(header);
  let header2 = document.createElement('h2');
  header2.innerHTML = title.value;
  header.appendChild(header2);
  let button = document.createElement('button');
  button.className = 'close-button';
  button.innerHTML = 'X';
  button.addEventListener("click", removeToDo);
  button.setAttribute('aria-label', 'delete item');
  header2.appendChild(button);
  let descriptionDiv = document.createElement('div');
  descriptionDiv.className = "todo-description";
  descriptionDiv.innerHTML = description.value;
  toDoDiv.appendChild(descriptionDiv);

  toDoContainer.appendChild(toDoDiv);


  //createElement - won't be attached to document
  // can add elements & html etc, then need to attach to document
  // toDoBox += `<div class="todo" onClick="toggleToDo(event)">`;
  // toDoBox += `<div class="todo-header">`;
  // toDoBox += `<h2>${title.value}</h2>`;
  // toDoBox += `<button aria-label="delete item" onclick="removeToDo(event)">X</button>`;
  // toDoBox += `</div>`;
  // toDoBox += `<div class="todo-description">${description.value}</div>`;
  // toDoBox += `</div>`;

  // toDoContainer.insertAdjacentHTML("beforeend", toDoBox);
}

/**
 * Function that should add a TODO HTML block to the DOM using
 * the appropriate data from the form when the form is submitted
 * @param event form submit event
 */
function addToDo(event) {
  event.preventDefault();
  //don't need event listener- just makeListBox()
  onsubmit = makeListBox('submit');
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
  //Don't need event listener

    targetElement.classList.toggle("completed");
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

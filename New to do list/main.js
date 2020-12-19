// Variables
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");


// Adding The Task For Testing...
theAddButton.onclick = function () {

  // If Input is Empty
  if (theInput.value === '') {

    console.log("No Value");

  } else {     

    // Create Main Span Element
    let mainSpan = document.createElement("span");

    // Create Delete Button
    let deleteElement = document.createElement("span");

    // Create The Main Span Text
    let text = document.createTextNode(theInput.value);

    // Create The Delete Button Text
    let deleteText = document.createTextNode("Delete");

    // Add Text To Main Span
    mainSpan.appendChild(text);

    // Add Class To Main Span
    mainSpan.className = 'task-box';

    // Add Text To Delete Button
    deleteElement.appendChild(deleteText);

    // Add Class To Delete Button
    deleteElement.className = 'delete';

    // Add Delete Button To Main Span
    mainSpan.appendChild(deleteElement);

    // Add The Task To The Container
    tasksContainer.appendChild(mainSpan);


    // Calculate Tasks
    calculateTasks();

  }

};

////////////////////////////////////////////////////////////::

document.addEventListener('click', function (e) {

  // Delete Task
  if (e.target.className == 'delete') {

    // Remove Current Task
    e.target.parentNode.remove();

    // Check Number Of Tasks Inside The Container
    if (tasksContainer.childElementCount == 0) {

      createNoTasks();

    }

  }
})
/////////////////////////////////////////////////////////////::



// Function To Calculate Tasks

function calculateTasks() {

// Calculate All Tasks
tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;



}
  
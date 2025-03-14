// Select DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please Enter a Task !!!!!!!!");
        return;
    }

    // Create list item
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    // Add task text
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="removeTask(this)">Remove</button>
    `;

    // Append task to list
    taskList.appendChild(taskItem);

    // Clear input
    taskInput.value = "";
}

// Function to remove a task
function removeTask(button) {
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}

// Event Listener for the Add Button
addTaskBtn.addEventListener('click', addTask);

// Event Listener for Enter key in the input field
taskInput.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

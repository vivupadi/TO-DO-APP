document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input value
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        // Create a new list item
        const listItem = document.createElement('li');

        // Checkbox for marking the task as complete
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            listItem.classList.toggle('completed');
        });

        // Task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        // Append elements to the list item
        listItem.appendChild(checkbox);
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);

        // Add the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add event listener to the "Add Task" button
    addTaskButton.addEventListener('click', addTask);

    // Optionally, allow pressing 'Enter' to add a task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
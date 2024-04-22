document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('task-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});

function addTask() {
    var taskInput = document.getElementById('task-input');
    var taskList = document.getElementById('task-list');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    var li = document.createElement('li');
    li.innerHTML = `
        <span>${taskInput.value}</span>
        <button onclick="removeTask(this)">Remove</button>
        <button onclick="completeTask(this)">Complete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
}

function removeTask(button) {
    var li = button.parentElement;
    li.remove();
}

function completeTask(button) {
    var span = button.previousElementSibling;
    span.classList.toggle('completed');
}

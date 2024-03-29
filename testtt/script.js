// Function to display existing tasks
function displayTasks() {
    var tasks = localStorage.getItem('tasks');
    if (tasks !== null) {
      var taskList = document.getElementById('taskList');
      taskList.innerHTML = ''; // Clear existing tasks
      JSON.parse(tasks).forEach(function(taskText) {
        var li = document.createElement('li');
        li.textContent = taskText;
        
        // Add edit button
        var editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function() {
          var newText = prompt('Edit task:', li.textContent);
          if (newText !== null && newText !== '') {
            li.textContent = newText;
            updateLocalStorage();
          }
        };
        li.appendChild(editButton);
  
        // Add remove button
        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
          li.remove();
          updateLocalStorage();
        };
        li.appendChild(removeButton);
  
        taskList.appendChild(li);
      });
    }
  }
  
  // Function to add a new task
  function addTask() {
    var input = document.getElementById('taskInput').value;
    if (input === '') {
      alert('Please enter a task!');
      return;
    }
  
    var taskList = document.getElementById('taskList');
    var li = document.createElement('li');
    li.textContent = input;
  
    // Add edit button
    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function() {
      var newText = prompt('Edit task:', li.textContent);
      if (newText !== null && newText !== '') {
        li.textContent = newText;
        updateLocalStorage();
      }
    };
    li.appendChild(editButton);
  
    // Add remove button
    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
      li.remove();
      updateLocalStorage();
    };
    li.appendChild(removeButton);
  
    taskList.appendChild(li);
    updateLocalStorage();
  
    // Clear input field
    document.getElementById('taskInput').value = '';
  }
  
  // Function to update local storage with tasks
  function updateLocalStorage() {
    var tasks = [];
    var taskList = document.getElementById('taskList').getElementsByTagName('li');
    for (var i = 0; i < taskList.length; i++) {
      tasks.push(taskList[i].textContent);
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  // Display existing tasks when the page loads
  window.onload = function() {
    displayTasks();
  };
let ul = document.querySelector('.tasklist');
let task = document.querySelector('.task');
let btn = document.querySelector('.btn');
let p = document.querySelector('.emptystate');
let count = 0;

function addtask(){
    const text = task.value.trim();
    if(text===""){
        alert("Task cannot be blank")
        return;
    }

    const save={
        id: count,  
        text: text,
        completed: false
    }

    tasks.push(save);
    saveTasks(tasks);

    createtask(text, save.id, false);

    count++;

    
    if (p) p.remove();
    task.value = '';
}

btn.addEventListener('click', function () {
   addtask();
})

task.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addtask();
    }
});

ul.addEventListener('click', (event) => {

    let li = event.target.closest('li')
    if (!li) { return; }

    console.log(event.target.tagName);

    if (event.target.tagName === 'BUTTON') {
        const id = Number(li.dataset.id);

        tasks= tasks.filter(task=>task.id!==id);
        saveTasks(tasks);

        li.remove();
        console.log('Task Deleted, ID:', li.dataset.id);
    }

    if (event.target.closest('.task-content')) {
        const id = Number(li.dataset.id);
        const taskObj = tasks.find(task => task.id === id);
        
        if (taskObj) {
            taskObj.completed = !taskObj.completed;
            saveTasks(tasks);
            li.classList.toggle('toggle');
        }
    }

})


function saveTasks(tasks){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getStoredTasks(){
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

let tasks = getStoredTasks();

tasks.forEach(task=>{
    createtask(task.text,task.id,task.completed);
    count = Math.max(count, task.id+ 1);
    if(p) p.remove();
});

// 1. Select the button
let clearBtn = document.querySelector('.clear-btn');

// 2. Add the click event
clearBtn.addEventListener('click', () => {
    if (confirm("Are you sure you want to delete all tasks?")) {
        // Clear the data
        tasks = [];
        saveTasks(tasks);
        
        // Clear the UI
        ul.innerHTML = '';
        
        // Reset the counter (optional, but keeps IDs clean)
        count = 0;
        
        // Show the empty state message again if you want
        location.reload(); // Quickest way to bring back the 'No Tasks' state
    }
});
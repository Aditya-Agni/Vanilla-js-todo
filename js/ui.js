function createtask(text, id, completed = false) {
    // Implement UI behavior logic here
    let newtask = document.createElement('li');
    newtask.dataset.id = id;

    const textSpan = document.createElement('span');
    textSpan.textContent = text;

    if (completed) {
        newtask.classList.add('toggle');
    }

    let contentWrapper = document.createElement('div');
    contentWrapper.classList.add('task-content');

    contentWrapper.appendChild(textSpan);

    let deletetask = document.createElement('button');
    deletetask.textContent = 'Remove';
    deletetask.classList.add('delete-btn');
  
    newtask.appendChild(contentWrapper);
    newtask.appendChild(deletetask);
    ul.appendChild(newtask);

    console.log(newtask.innerText);
}

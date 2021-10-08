const newToDO = document.querySelector("input[type = 'text']");
const form = document.querySelector('#makeToDoListItem');
const toDoList = document.querySelector('ul');
const nextToDo = document.createElement('li');
const savedTodos = JSON.parse(sessionStorage.getItem('todos')) || [];
for (let i = 0; i < savedTodos.length; i++) {
    let nextToDo = document.createElement('li');
    nextToDo.innerText = savedTodos[i].task;
    toDoList.prepend(nextToDo);
}
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nextToDo = document.createElement('li');
    nextToDo.innerText = newToDO.value;
    toDoList.prepend(nextToDo);
    newToDO.value = '';
    savedTodos.push({ task: nextToDo.innerText, done: false });
    sessionStorage.setItem('todos', JSON.stringify(savedTodos));
});
toDoList.addEventListener('click', function(event) {
    event.target.classList = 'done';
    console.log(event.target);
});
toDoList.addEventListener('dblclick', function(event) {
    event.target.remove();
    sessionStorage.setItem('todos', JSON.stringify(savedTodos));
    savedTodos
});
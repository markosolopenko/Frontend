
// get Items
let todosList = document.querySelector('.todos__list');
let addItem = document.querySelector('.btn__submit');
let inputForm = document.querySelector('#todo');
let filter = document.querySelector('.filter');


// Events 
document.addEventListener('DOMContentLoaded', getTodos);

addItem.addEventListener('click', addItems);

todosList.addEventListener('click', deleteCheck);

filter.addEventListener('click', filterTodos);

// Functions 

// Add todos 
function addItems(event) {
    event.preventDefault();
    let listItem = document.createElement('li');
    listItem.className = 'list__item';
    let divDone = document.createElement('div');
    let divRemove = document.createElement('div');
    divDone.id = 'done';
    divRemove.id = 'remove';
    divDone.innerHTML = '<i class="done fas fa-check"></i>';
    divRemove.innerHTML = '<i class="remove fas fa-trash-alt"></i>';
    // Add to localStorage
    saveLovalTodos(inputForm.value) ;


    listItem.innerHTML = '<span class="todos__text">' + inputForm.value + '</span>';
    listItem.append(divDone);
    listItem.append(divRemove);
    if(inputForm.value.length > 0) {
        todosList.append(listItem);
    }else {
        alert('Write something');
    }
    

    inputForm.value = '';
}

// Delete Todos and check

function deleteCheck(event) {
    let item = event.target;
    if( item.id === 'remove') {
        let todo = item.parentElement;
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function() {
            todosList.removeChild(todo);
        });
    }else if( item.classList[0] === 'remove' ) {
        let todo = item.parentElement.parentElement; 
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function() {
            todosList.removeChild(todo);
        });
    }else if(item.id === 'done') {
        let todo = item.parentElement;
        todo.classList.add('checked');
        todo.children[0].classList.toggle('done__item');
        todo.classList.toggle('opacity');
    }else if(item.classList[0] === 'done') {
        let todo = item.parentElement.parentElement;
        todo.classList.add('checked');
        todo.children[0].classList.toggle('done__item');
        todo.classList.toggle('opacity');
    }
} 


// filter todos

function filterTodos(event) {
    let todoShow = todosList.childNodes;
    console.log(todoShow);
    todoShow.forEach(function(item) {
       
        switch(event.target.value) {
            case 'all': 
                item.style.display = 'flex';
                break;
            case 'completed': 
                if(item.classList.contains('checked')) {
                    item.style.display = 'flex';
                }else {
                    item.style.display = 'none';
                }
                break;
            case 'uncompleted': 
                if(!item.classList.contains('checked')) {
                    item.style.display = 'flex';
                }else {
                    item.style.display = 'none';
                }
                break;
        }
    });
}



// LocalStorage

function saveLovalTodos(todo) {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem('todos')); 
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}


function getTodos() {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem('todos')); 
    }
   todos.forEach(function(todo) {
    let listItem = document.createElement('li');
    listItem.className = 'list__item';
    let divDone = document.createElement('div');
    let divRemove = document.createElement('div');
    divDone.id = 'done';
    divRemove.id = 'remove';
    divDone.innerHTML = '<i class="done fas fa-check"></i>';
    divRemove.innerHTML = '<i class="remove fas fa-trash-alt"></i>';



    listItem.innerHTML = '<span class="todos__text">' + todo + '</span>';
    listItem.append(divDone);
    listItem.append(divRemove);
    todosList.append(listItem);
   });
}


function removeLocalTodos(todo) {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem('todos')); 
    }
    let todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1); 
    localStorage.setItem('todos', JSON.stringify(todos));
}

'use strict';



let firstTask = document.querySelector('#firstTask')
let input = document.querySelector('input');
let button = document.querySelector('button');
const arr = [];
let text;
let li ;
let complite = document.querySelector('#complite');
let task = document.getElementsByClassName('task');



function addTask () {
    text = input.value;   
    arr.push(text);
    li = document.createElement('li');
    li.className = "task";
    li.style.textDecoration = 'none';

    for (let i = 0; i < arr.length; i++) {
        li.innerHTML = arr[i];  
    };
    
    tasksList.prepend(li);
    
    firstTask.classList.add('hide')
    firstTask.classList.remove('task')
    input.value = '';
    input.focus();
    click();
}

function click () {
    
   for (let i = 0; i < task.length; i++) {
    const element = task[i];
    element.addEventListener('click', (i) =>{
         if (element.getAttribute('style') == 'text-decoration: none;') {
            element.style.textDecoration = "line-through";
            
         } else  {
            element.style.textDecoration = "none"
         }
         console.log(element);
    })
   }

}

button.addEventListener('click', addTask);

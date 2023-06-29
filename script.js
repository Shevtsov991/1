'use strict';

let input = document.querySelector('#TaskText');
let button = document.querySelector('button');
let tasksArr = [];
let completeButton = document.querySelector('#complete');
let ul = document.querySelector('#tasks');



if (localStorage.getItem('tasks')) {
   tasksArr = JSON.parse(localStorage.getItem('tasks'))
}

 tasksArr.forEach(Element => {
    createLi(Element);
 });

 input.addEventListener('keydown', function(e) {
   if (e.keyCode === 13) {
      addTask()
   }})

button.addEventListener('click', addTask);

completeButton.addEventListener('click', showHide);

function addTask () {

    let text = input.value;  

    if (text == '') {
      return alert('Вы не написали задачу!');
    } 

    const taskObj = {
      id: Date.now(),
      textTask: text,
      textDecoration: 'none',
      className: 'task',
   }

   tasksArr.push(taskObj);
   saveLocalStorage();
   createLi(taskObj)
    input.value = '';
    input.focus();
   
}

function createLi(Element) {

let li = document.createElement('li');
    li.id = Element.id;
    li.className = Element.className;
    li.style.textDecoration = Element.textDecoration;
    li.innerHTML = Element.textTask + "  "; 
    li.addEventListener ('click', taskDone);
    li.addEventListener('contextmenu', deleteTask)
    tasks.prepend(li);
    

}

function taskDone(e) {
   onmousedown="return false"
   if (e.target.getAttribute('style') == 'text-decoration: none;') {
      e.target.style.textDecoration = "line-through";

         const index = tasksArr.findIndex(item => item.id == e.target.id );
         tasksArr[index].textDecoration = "line-through";
         saveLocalStorage();
         
      } else {
         onmousedown="return false"
         e.target.style.textDecoration = "none";

         const index = tasksArr.findIndex(item => item.id == e.target.id );
         tasksArr[index].textDecoration = "none";
         saveLocalStorage();  
      }
}

function saveLocalStorage() {
   localStorage.setItem('tasks', JSON.stringify(tasksArr));
}

function deleteTask(e) {
   e.target.className = "hide";
   const index = tasksArr.findIndex(item => item.id == e.target.id );
         tasksArr[index].className = "hide";
         saveLocalStorage(); 
}

 function showHide(){ 
let h1 = document.querySelector("#h1");

   ul.innerHTML = '';

   tasksArr.forEach (element => {     
   if(element.className === "hide") {
      element.className = "task";  
   } else {  
      element.className = "hide";     
   }
   createLi(element);
     })

   if (completeButton.innerHTML === 'Удалённые') {
      completeButton.innerHTML = 'Активные';
      h1.innerHTML = "Удалённые задачи";
   } else {
      completeButton.innerHTML = 'Удалённые';
      h1.innerHTML = "Активные задачи"; 
   }
   console.log(h1.innerHTML);
   saveLocalStorage();
 }



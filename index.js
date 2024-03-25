let todoList = [{}]; 





function addTodo(){
   
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate: todoDate});
    localStorage.setItem('todolist', JSON.stringify(todoList))
    inputElement.value ='';
    dateElement.value ='';
    displayItem();
}

function displayItem(){
    let conatinerElement = document.querySelector('.todo-container');


    let newHtml = '';

    for(let i =1; i<todoList.length; i++){
        let {item, dueDate} = todoList[i];
       newHtml += `
      
       <span>${item}</span>
       <span>${dueDate}</span>
       <button class="btn-delete" onclick="
       todoList.splice(${i}, 1);
       displayItem(); 
       ">Delete</button>
       `;
    }

    conatinerElement.innerHTML= newHtml;
}
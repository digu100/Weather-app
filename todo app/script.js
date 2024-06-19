// function loadTodos(){
//     //This function wil load the todos from the browser
//     const todos= localStorage.getItem("todos");
//     console.log(typeof todos);

// }

function loadTodos(){
    //This function wil load the todos from the browser
    const todos=JSON.parse(localStorage.getItem("todos")) || {"todoList": []};
    console.log(todos);
    return todos;

}

function addTodoToLocalStorage(todoText){
  const todos= loadTodos();
  todos.todoList.push(todoText);
  localStorage.setItem("todos", JSON.stringify(todos))
}


function appendTodoInHtml(todoText){
    const todoList= document.getElementById("todoList")
    const todo= document.createElement("li");
    todo.textContent=todoText
    //this expects node
    todoList.appendChild(todo);
}


document.addEventListener("DOMContentLoaded",()=>{
    // loadTodos();
   // console.log(document.getElementById("todoinput"));
    const todoinput= document.getElementById("todoinput");

    const submitButton= document.getElementById('todoButton');

    submitButton.addEventListener('click', (event)=>{
        const todoText= todoinput.value;
        if(todoText==''){
            alert("Please write something to add as todo")
        }else{
            addTodoToLocalStorage(todoText)
            todoinput.value = ''; 
        }

    })


    todoinput.addEventListener('change', (event)=>{
        //this call back function is fired every time when there is a change in input
        console.log("something changed", event.target.value)
    })

    loadTodos();

})

















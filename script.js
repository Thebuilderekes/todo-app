let todos = [
    {
        title: "wash the car", 
        dueDate: " 2021-10-04 "
    },

    {

        title: "clean my room", 
        dueDate: " 2021-10-04 "
    },

    {
        title:"Buy groceries",
        dueDate: " 2021-10-04 "
    }

]; // creating an array of todo objects 

// step 3
render(); // calling the render function to display the to do list


// step 1
function addToDo() {
  // function to add new todo item on click of button 
  let datePicker= document.getElementById("date-picker"); //creating toDoInput container for the text input value
  let dueDate = datePicker.value;
  let toDoTextBox = document.getElementById("todoValue"); //creating toDoInput container for the text input value
  let todoTitle = todoTextBox.value; //grabbing and storing the text input value in todoTitle
  todos.push({
    title:"title",
    dueDate: "dueDate"
  }); //adding the value to the todos object

  render(); // calling the render function to display list after click of "add to do" button
}
 
// step 2
function render() {
  // function used to render the to do list items
  document.getElementById("todo-list").innerHTML = " "; // this allows the list to be blank until the loop runs and re-renders the updated list with the newly inputted item on display. We do this so that the list does not re-render the old list togther with the new list again. remove this line to see the difference
  todos.forEach((todo) => {
let element = document.createElement("div"); // creating element container to hold the list container
element.innerText = todo.title; //attaching object property text to innertext of list container
let todoList = document.getElementById("todo-list");  //creating todoList container for element container
todoList.appendChild(element); // attaching the element container to the todoList container 
  });
}

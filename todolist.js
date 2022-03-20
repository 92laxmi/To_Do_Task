// getting all required elements
const inputBox = document.querySelector(".inputfield input");
const addBtn = document.querySelector(".inputfield button");
const todoList = document.querySelector(".todolist");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup= ()=>{
    let userData =inputBox.value; //getting user entered value
    if(userData.trim() !=0){   // if user values arent only spaces
        addBtn.classList.add("active"); // active the add button
    } else{
        addBtn.classList.remove("active"); // unactive the add button 
    }

}
showTasks(); // calling showTasks function  




// if user click on the add button
addBtn.onclick = () =>{
    let userData = inputBox.value;
    let getlocalStorage = localStorage.getItem("New Todo"); // getting localstorage
    if(getlocalStorage == null){ // localStorage is null
        listArr = []; // creating blank array

    }else{
        listArr = JSON.parse(getlocalStorage);// transforming json string into a js object
    }

    listArr.push(userData);// pushing or adding user data
    localStorage.setItem("New Todo", JSON.stringify(listArr)); // transforming js object into a json string
    showTasks(); // calling showTasks function
    addBtn.classList.remove("active"); // unactive the add button 
}

// function to add task list inside ul
function showTasks(){
    let getlocalStorage = localStorage.getItem("New Todo"); // getting localstorage
    if(getlocalStorage == null){ // localStorage is null
        listArr = []; // creating blank array

    }else{
        listArr = JSON.parse(getlocalStorage);// transforming json string into a js object
    }

    const pendingNumb =document.querySelector(".pendingNumb");
    pendingNumb.textContent =listArr.length;// passing the length value in pendingNumb
    if(listArr.length > 0){ // if array id greater then 0
        deleteAllBtn.classList.add("active");// active the clearall button
    }else{
        deleteAllBtn.classList.remove("active"); // unactive the clearall button
    }
    let newLiTag ='';
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick="deleteTask(${index})"; ><i class="fa fa-trash"></i></span></li>`;   
    });

    todoList.innerHTML = newLiTag; // adding new li tag inside ul tag
    inputBox.value =""; // once task added leave the input field blank
}
 // delete task fuction 
 function deleteTask(index){
     let getlocalStorage = localStorage.getItem("New Todo");
     listArr = JSON.parse(getlocalStorage);
     listArr.splice(index, 1); // delete or remove the particular indexed li
    // after remove the li again update  the local storage
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showTasks(); // calling showTasks function
 }

 // delete all tasks function
 deleteAllBtn.onclick = () =>{
     listArr = []; // empty an array
    // after deleting all the task again update  the local storage
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showTasks(); // calling showTasks function 

 }
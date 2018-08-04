function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    //create delete button
    let deleteButton = document.createElement('button_2')

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

    //delete button
     deleteButton.textContent = "Delete";

     //add delete button to newLi
		  newLi.appendChild(deleteButton);

      //delete the to-do list
      deleteButton.addEventListener('click', event => {
      event.target.parentNode.remove();

         });

  });
}

window.onload = function() {
  onReady();
};

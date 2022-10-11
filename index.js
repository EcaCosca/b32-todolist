// ALL SELECTORS AT THE TOP 
const addBtn = document.querySelector('.add-btn');
const h1 = document.querySelector('.title');
const input = document.querySelector("#input");
const ol = document.querySelector("#ordered-list");

// console.log(h1)

// WHENEVER SOMEONE DOUBLE CLICKS ON THE H1 IT CHANGES COLOR TO WHITE
const handleClick = () => {
    !h1.style.color ? h1.style.color = 'white' : h1.style.color = ''
}

h1.addEventListener("click", handleClick)

// DELETE BUTTON

const deleteBtnCreator = () => {
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener('click', (e)=>{
        const item = e.target.parentElement;
        ol.removeChild(item);
    });
    return deleteBtn;
}

// EDIT BUTTON

const editBtnCreator = () => {
    const editBtn = document.createElement('button');

    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";

    editBtn.addEventListener('click', (e)=>{
        const currentValue = e.target.parentElement.childNodes[0].data;
        input.value = currentValue

        const item = e.target.parentElement;
        ol.removeChild(item);
    });
    return editBtn;
}

// CLICK EVENT FOR SUBMITING A NEW ITEM IN A TO DO LIST

addBtn.addEventListener("click", (e) => {
    // PREVENT THE FORM FROM RELOADING THE PAGE 
    e.preventDefault();

    // PREVENT THE FUNCTION FROM HAPPENING IF THE INPUT FIELD IS EMPTY 
    if(!input.value){
        alert("Input fields cannot be empty");
        return;
    }
    
    // CREATE A NEW LI ELEMENT INSIDE OF THIS FUNCTION 
    const li = document.createElement("li")

    // FIND THIS NEW LI AND CHANGE THE INNER HTML TO MATCH WHAT WE HAVE IN THE INPUT FIELD 
    li.innerHTML = input.value
    // ADD DELETE BUTTON 
    li.appendChild(deleteBtnCreator())
    // ADD EDIT BUTTON 
    li.appendChild(editBtnCreator())

    // CHANGE BACKGROUND OF THIS ITEM SO IT'S MARKED AS DONE OR VICEVERSA
    li.addEventListener('click',(e)=>{
        !e.target.style.backgroundColor ? e.target.style.backgroundColor = 'red' : e.target.style.backgroundColor = '' 
    })

    // FIND THE ORDERED LIST AND APPEND THE NEW LI WE CREATED 
    ol.appendChild(li)

    // CLEAR THE INPUT FIELD FROM ANY TEXT WRITEN 
    input.value = ''
})






// ALL SELECTORS AT THE TOP 
const addBtn = document.querySelector('.add-btn');
const h1 = document.querySelector('.title');
const input = document.querySelector("#input");
const ol = document.querySelector("#ordered-list");

// console.log(h1)

// WHENEVER SOMEONE DOUBLE CLICKS ON THE H1 IT CHANGES COLOR TO WHITE
const handleClick = () => {
    h1.style.color = 'white'
}

h1.addEventListener("click", handleClick)

// ADDING SOMETHING TO THE LIST

const listItemCreator = (text) => {
    document.getElementById('ordered-list').innerHTML += `<li onclick="markAsDone(this)">${text}</li>`
}

// CHANGE BACKGROUND OF THIS ITEM SO IT'S MARKED AS DONE OR VICEVERSA

const markAsDone = (e) => { 
    // IF STATEMENT 
    // if(!e.style.backgroundColor){
    //     e.style.backgroundColor = 'red'
    // }else{
    //     e.style.backgroundColor = ''
    // }

    // TERNARY OPERATOR 
    !e.style.backgroundColor ? e.style.backgroundColor = 'red' : e.style.backgroundColor = '' 
}

// DELETE BUTTON 

const deleteBtnCreator = () => {
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener('click', (e)=>{
        const item = e.target.parentElement;
        ol.removeChild(item);

        const items = document.querySelectorAll('li');

        if(items.length === 0){
            empty.style.display = "block"
        }
    });
    return deleteBtn;
}

// CLICK EVENT FOR SUBMITING A NEW ITEM IN A TO DO LIST

addBtn.addEventListener("click", (e) => {
    // PREVENT THE FORM FROM RELOADING THE PAGE 
    e.preventDefault();
    
    // CREATE A NEW LI ELEMENT INSIDE OF THIS FUNCTION 
    const li = document.createElement("li")

    // FIND THIS NEW LI AND CHANGE THE INNER HTML TO MATCH WHAT WE HAVE IN THE INPUT FIELD 
    li.innerHTML = input.value
    li.appendChild(deleteBtnCreator())

    // FIND THE ORDERED LIST AND APPEND THE NEW LI WE CREATED 
    ol.appendChild(li)

    // CLEAR THE INPUT FIELD FROM ANY TEXT WRITEN 
    input.value = ''
})






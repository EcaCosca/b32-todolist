const addBtn = document.querySelector('.add-btn')





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


// CLICK EVENT FOR SUBMITING A NEW ITEM IN A TO DO LIST

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("submit")
})

// ADDING SOMETHING TO THE LIST

const listItemCreator = (text) => {
    document.getElementById('ordered-list').innerHTML += `<li onclick="markAsDone(this)">${text}</li>`
}

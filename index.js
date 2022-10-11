const handleChange = (e) => {
    // console.log(e)
    document.getElementById('ordered-list').innerHTML += `<li>${e}</li>`
}


const handleSubmit = (e) => {
    // e.preventDefault()

    alert("submited")
}

// const newInput = document.getElementById('newInput')

// newInput.addEventListener('click', handleChange)
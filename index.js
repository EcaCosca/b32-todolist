const handleChange = (e) => {
    // console.log(e)
    document.getElementById('ordered-list').innerHTML += `<li onclick="markAsDone(this)">${e}</li>`
}


const handleSubmit = (e) => {
    // e.preventDefault()

    alert("submited")
}

const markAsDone = (e) => { !e.style.backgroundColor ? e.style.backgroundColor = 'red' : e.style.backgroundColor = '' }
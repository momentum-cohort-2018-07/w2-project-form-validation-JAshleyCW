console.log('Add validation!');

// Each field is required. If there is no user input, mark it as invalid
// identify fields with a var
// need event listener for the form -- call will begin upon submit
document.getElementById('parking-form').addEventListener('submit', function (event){
    event.preventDefault()
    // check()

// var for the input fields -- these can't be blank
var nameField = document.getElementById('name').value
    console.log(nameField)

    if (nameField === '') {
        dispEmptyError ()
    } 
})

// function check(){
//     var inputField = document.getElementsByClassName('input-field')
// console.log(inputField)
// }

// check to see if the input fields are empty, using var nameField

// define function for disp empty fields; what is the message
function dispEmptyError () {
    var errorMessDiv = document.createElement('div')
    errorMessDiv.classList.add('input-invalid')
    errorMessDiv.innerText = 'Required field cannot be blank'

    var fields = document.getElementById('name-field')
    fields.appendChild(errorMessDiv)
    fields.classList.add('input-invalid')
}


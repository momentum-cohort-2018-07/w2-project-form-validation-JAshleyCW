console.log('Add validation!'); // just to make sure I'm working :)

// Each field is required. If there is no user input, mark it as invalid
// identify fields with a var

// need event listener for the form -- call will begin upon submit
document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()

    clearError()

    // var for the input fields -- these are all required fields .value pulls the value of 'name'
    // check to see if the input fields are empty .value
    var name = document.getElementById('name').value.trim()
    var carYear = document.getElementById('car-year').value.trim()
    var carMake = document.getElementById('car-make').value.trim()
    var carModel = document.getElementById('car-model').value.trim()
    var dateParking = document.getElementById('start-date').value.trim()
    var numOfDays = document.getElementById('days').value.trim()
    var creditCard = document.getElementById('credit-card').value.trim()
    var cvv = document.getElementById('cvv').value.trim()
    var expiration = document.getElementById('expiration').value.trim()

    if (name === '') {
        emptyNameError()
    } //else turn green; will need to create a function for not empty

    if (carYear === '') {
        emptyCarError()
    }

    if (carMake === '') {
        emptyCarError()
    }
    
    if (carModel === '') {
        emptyCarError()
    }

    if (dateParking === '') {
        emptyDateError()
    }

    if (numOfDays === '') {
        emptyDaysError()
    }

    if (creditCard === '') {
        emptyCreditError()
    }

    if (cvv === '') {
        emptyCvvError()
    }

    if (expiration === '') {
        emptyExpError ()
    }

})


// define function for disp empty fields; what is the message
// function dispEmptyError creates class='input-invalid' in div tag
function emptyNameError() {
    var errorMessDiv = document.createElement('div') // only need these two for valid
    errorMessDiv.classList.add('input-invalid') // ony need these two for valid
    errorMessDiv.innerText = 'Required field'

    // this appends the errorMessDiv to the 'name-field' element, adding the 'input-invalid' class
    // which results in error 'Req field cannot be blank' if the field is empty
    var nameField = document.getElementById('name-field')
    nameField.appendChild(errorMessDiv)
    nameField.classList.add('input-invalid')
}

function emptyCarError () {
    var errorMessDiv = document.createElement('div')
    errorMessDiv.classList.add('input-invalid')
    errorMessDiv.innerText = 'Required Field'

    var carFields = document.getElementById('car-field')
    carFields.appendChild(errorMessDiv)
    carFields.classList.add('input-invalid')
}

function emptyDateError () {
    var errorMessDiv = document.createElement('div')
    errorMessDiv.classList.add('input-invalid')
    errorMessDiv.innerText = 'Required field'

    var dateField = document.getElementById('start-date-field')
    dateField.appendChild(errorMessDiv)
    dateField.classList.add('input-invalid')
}

function emptyDaysError () {
    var errorMessDiv = document.createElement('div')
    errorMessDiv.classList.add('input-invalid')
    errorMessDiv.innerText = 'Required field'

    var daysField = document.getElementById('days-field')
    daysField.appendChild(errorMessDiv)
    daysField.classList.add('input-invalid')
}

function emptyCreditError () {
    var errorMessDiv = document.createElement('div')
    errorMessDiv.classList.add('input-invalid')
    errorMessDiv.innerText = 'Required field'

    var creditCardField = document.getElementById('credit-card-field')
    creditCardField.appendChild(errorMessDiv)
    creditCardField.classList.add('input-invalid')
}

function emptyCvvError () {
    var errorMessDiv = document.createElement('div')
    errorMessDiv.classList.add('input-invalid')
    errorMessDiv.innerText = 'Required Field'

    var cvvField = document.getElementById('cvv-field')
    cvvField.appendChild(errorMessDiv)
    cvvField.classList.add('input-invalid')
}

function emptyExpError () {
    var errorMessDiv = document.createElement('div')
    errorMessDiv.classList.add('input-invalid')
    errorMessDiv.innerText = 'Required Field'

    var expField = document.getElementById('expiration-field')
    expField.appendChild(errorMessDiv)
    expField.classList.add('input-invalid')
}
function clearError () {
    var nameField = document.getElementById('name-field')
    nameField.classList.remove('input-invalid') 

    var errorMsg = nameField.querySelector('input-invalid')
    if (errorMsg) {
        errorMsg.remove()
    }
 }


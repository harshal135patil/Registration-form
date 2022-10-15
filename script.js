function validate() {
    let firstname = document.getElementById('first-name').value
    let lastname = document.getElementById('last-name').value
    let email = document.getElementById('email').value
    let city = document.getElementById('city').value
    let state = document.getElementById('state').value
    let zip = document.getElementById('zip').value
    let tnC = document.getElementById('t-and-c').checked
    let error = false
    console.log(firstname, lastname, email, city, state, zip, tnC)

    if(firstname.length >=2) {
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    }
    else{
        document.getElementById('first-name-valid').style.display = 'none'
        document.getElementById('first-name-invalid').style.display = 'block'
         error = true
    }
    if(lastname.length >=2) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    }
    else{
        document.getElementById('last-name-valid').style.display = 'none'
        document.getElementById('last-name-invalid').style.display = 'block'
        error = true
    }
    if(email.includes('@') && email.includes('.') && email.indexOf('@')!= 0 && email.length - email.indexOf('.')>=3) {
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'
    }
    else{
        document.getElementById('email-valid').style.display = 'none'
        document.getElementById('email-invalid').style.display = 'block'
        error = true
    }
    if(city.length >=3) {
        document.getElementById('city-valid').style.display = 'block'
        document.getElementById('city-invalid').style.display = 'none'
    }
    else{
        document.getElementById('city-valid').style.display = 'none'
        document.getElementById('city-invalid').style.display = 'block'
        error = true
    }
    let zipnumber = parseInt(zip)
    if(zip.length === 6 && !isNaN(zipnumber)) {
        document.getElementById('zip-valid').style.display = 'block'
        document.getElementById('zip-invalid').style.display = 'none'
    }
    else{
        document.getElementById('zip-valid').style.display = 'none'
        document.getElementById('zip-invalid').style.display ='block'
        error = true
    }
        if(state!='none') {
            document.getElementById('state-valid').style.display = 'block'
            document.getElementById('state-invalid').style.display = 'none'
        }
        else{
            document.getElementById('state-valid').style.display = 'none'
            document.getElementById('state-invalid').style.display = 'block'
            error = true
        }
        if(tnC){
            document.getElementById('t-and-c-invalid').style.display = 'none'
        }
        else{
            document.getElementById('t-and-c-invalid').style.display = 'block'
            error = true
        }
     if(!error){
            alert('Your details are saved successfully.')
            document.getElementById('first-name').value = ''
              document.getElementById('last-name').value = ''
             document.getElementById('email').value = ''
              document.getElementById('city').value = ''
             document.getElementById('state').value = ''
            document.getElementById('zip').value = ''
             document.getElementById('t-and-c').checked= false
        let validfeedbacks = document.getElementsByClassName('valid-feedback')
        for(let i=0; i<validfeedbacks.length; i++){
        validfeedbacks[i].style.display ='none'
        }
        let invalidfeedbacks = document.getElementsByClassName('invalid-feedback')
        for(let i=0; i<invalidfeedbacks.length; i++){
        invalidfeedbacks[i].style.display ='none'
        }
    }
}
   


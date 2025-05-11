function validatePhoneNumber(number) {
    if (number.length < 10 || number.length > 12 || number.length == 11 || number[0] == '0') {
        alert('Invalid Phone Number !')
        return false;
    }
    return true;
}
function sendContactEmail(event) {
    event.preventDefault();
    const { name, email, phone, message } = event.target;
    const formData = {
        name: name.value,
        email: email.value,
        message: message.value,
        phone: phone.value,
    };
    
    //Validation logic
    
    if(validatePhoneNumber(formData.phone))
        console.log(formData);
}

var invalidChars = [
    "-",
    "+",
    "e",
  ];
document.querySelector(".phn").addEventListener("keydown", function (evt) {
    if (invalidChars.includes(evt.key)) {
        evt.preventDefault();
    }
});
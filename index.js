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
    if(isValidPhoneNumber(formData.phone))
    {
        console.log("TRUE");
    }
    else{
        console.log("False Code");
    }
    const phoneumber=phone.toString();
        if(phoneumber.length!=13)
        {
            alert('use 10 digit number')
        }

}
function isValidPhoneNumber(phone) {
    const pattern = /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/;
    const phoneNumber=phone.toString();
    if (!phoneNumber) {
        return "false";
    }
 
    // Return true if the phone number
    // matched the Regex
    if (pattern.test(phoneNumber)) {
        return "true";
    } else {
        return "false";
    }
}

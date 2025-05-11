function sendContactEmail(event) {
    event.preventDefault()
    const { name, email, phone, message } = event.target;
    const formData = {
        name: name.value,
        email: email.value,
        message: message.value,
        phone: phone.value,
    };
    //resetting the form
    document.querySelector("form").reset()



    //Validation logic
    
    console.log(formData);
}

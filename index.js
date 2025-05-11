function sendContactEmail(event) {
    
    const { name, email, phone, message } = event.target;
    const formData = {
        name: name.value,
        email: email.value,
        message: message.value,
        phone: phone.value,
    };

    //Validation logic
    console.log(formData);
    event.preventDefault();
}

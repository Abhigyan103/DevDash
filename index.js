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
    if(formData.phone.length != 10) {
        alert("Number must be 10 digit");
    }
    console.log(formData);
}

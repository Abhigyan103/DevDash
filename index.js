

function sendContactEmail(event) {
    event.preventDefault();
    const { name, email, phone, message } = event.target;
    if (phone.value.length != 10) {
        alert("Please enter a valid phone number");
        return;
    }
    const formData = {
        name: name.value,
        email: email.value,
        message: message.value,
        phone: phone.value,
    };

    //Validation logic

    console.log(formData);
}

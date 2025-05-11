function sendContactEmail(event) {
    event.preventDefault();
    const { name, email, phone, message } = event.target;
    const formData = {
        name: name.value,
        email: email.value,
        message: message.value,
        phone: phone.value,
    };

    if (phone.length<10) return;

    console.log(formData);
}

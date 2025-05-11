function sendContactEmail(event) {
  const { name, email, phone, message } = event.target;
  // const formData = {
  //   name: name.value,
  //   email: email.value,
  //   message: message.value,
  //   phone: phone.value,
  // };

  if (phone.length > 10) {
    alert("Phone number should be 10 digits");
    return;
  }
  console.log(phone.value);
}

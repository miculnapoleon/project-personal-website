function handleSubmit(e) {
    e.preventDefault();
    const {target} = e
    debugger
    const formData = {
        name: target.name.value,
        email: target.email.value,
        reason: target.reason.value,
        message: target.message.value
    }
    console.log(formData)
    const inputs = document.querySelectorAll('input[name="name"], input[name="email"], input[name="reason"],textarea[name="message"]');
    console.log(inputs)
    inputs.forEach(input => {
        input.value = '';
    })
}

function checkForm() {
    var Email = mail.email;
    if (Email.value.indexOf("@") == -1 ||
        Email.value.indexOf(".") == -1 || Email.value.indexOf("com") == -1) {
        alert("Please enter your valid e-mail address.");
        formEmail.focus();
        return;
    }
    mail.arrow.submit();
}
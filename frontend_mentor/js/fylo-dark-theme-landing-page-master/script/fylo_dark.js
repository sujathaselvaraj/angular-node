function mailcheck() {
    var formEmail = document.mail.email;
    if (formEmail.value.indexOf("@") == -1 ||
        formEmail.value.indexOf(".") == -1) {
        alert("Please enter your valid e-mail address.");
        formEmail.focus();
        return;
    }
}
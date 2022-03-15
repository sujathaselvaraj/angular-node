function checkForm() {
    var formFName = document.myForm.Fname;
    var formLName = document.myForm.Lname;
    var formEmail = document.myForm.email;
    var formPassword = document.myForm.password;
    for (let i = 0; i < formFName.length; i++)
        if (formFName.value.indexOf(" ") == 1) {
            alert("Please enter valid First Name.");
            formFName.focus();
            return;
        }
    for (let i = 0; i < formLFName.length; i++)
        if (formLName.value.indexOf("i") == Number) {
            alert("Please enter valid Last Name.");
            formLName.focus();
            return;
        }
    if (formEmail.value.indexOf("@") == -1 ||
        formEmail.value.indexOf(".") == -1 && formEmail.value.indexOf("com") == -1) {
        alert("Please enter your valid e-mail address.");
        formEmail.focus();
        return;
    }
    if (formPassword.value.indexOf("0-9") == -1 && formPassword.value.indexOf("a-z") == -1 && formPassword.value.indexOf("A-Z") == -1) {
        alert("Please valid Password");
        formPassword.focus();
        return;
    }
    document.myForm.submit();
}
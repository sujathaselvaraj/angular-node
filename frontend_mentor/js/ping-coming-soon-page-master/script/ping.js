// function checkmail() {
//     const message = document.getElementById('error');
//     var formEmail = document.mail.email;
//     if (formEmail.value.indexOf(" ") == -1) {
//         message.style.display = 'block';
//     }elseif (formEmail.value.indexOf("@") == -1 ||
// formEmail.value.indexOf(".") == -1 && formEmail.value.indexOf("com") == -1) {
// alert("Please enter your valid e-mail address.");
// return;
// }
// document.arrow.submit();
// }
function ValidateEmail(inputText)
{
var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
if(inputText.value.match(mailformat))
{
var message1 = "Succesfully entered a valid Mail Address"
//alert("You have entered a valid email address!"); 
document.getElementById("success").innerHTML = message1;
//document.form1.text1.focus();
return true;
}
else
{
var message = "<b>Provide a Valid Mail Address</b>"
// alert("You have entered an invalid email address!");
document.getElementById("error").innerHTML = message;
// document.form1.text1.focus();
return false;
}
}
// function ValidateEmail(inputText)
// {
// var formEmail = document.form1.text1;
// if (formEmail.value.indexOf("@") == -1 || formEmail.value.indexOf(".") == -1 && formEmail.value.indexOf("com") == -1)
// {
// var message1 = "Succesfully entered a valid Mail Address"
// //alert("You have entered a valid email address!"); 
// document.getElementById("success").innerHTML = message;
// //document.form1.text1.focus();
// return true;
// }
// else
// {
// var message = "Provide a Valid Mail Address"
// // alert("You have entered an invalid email address!");
// document.getElementById("error").innerHTML = message;
// // document.form1.text1.focus();
// return false;
// }
// }
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password")
var enter= document.getElementById('enter'); 
var pass = document.getElementById('pass');

//emailInput.addEventListener('textInput', email_verify);
 //passwordInput.addEventListener('textInput', pass_verify);

function validated() {
    if (emailInput.value.length < 9)
     {
        emailInput.style.border = "1px solid red";
        enter.style.display = "block";
        emailInput.focus();
        return false;
    }

    if (passwordInput.value.length < 9) {
        passwordInput.style.border = "1px solid red";
        pass.style.display = "block";
        passwordInput.focus();
        return false;
    }
}
function email_Verify(){
	if (email.value.length >= 8) 
    {
		email.style.border = "1px solid silver";
		enter.style.display = "none";
		return true;
	}
}
function pass_Verify()
{
	if (password.value.length >= 5) {
		password.style.border = "1px solid silver";
		pass.style.display = "none";
		return true;
	}
}
var formulary = document.getElementById('formulaire');
var Name = document.getElementById('name');
var lastName = document.getElementById('lastname');
var contact = document.getElementById('contact');
var register = document.getElementById('register');
var userName = document.getElementById('user-name');
var userNameV = document.getElementById('user-nameV');
var userLast = document.getElementById('user-last');
var userLastName = document.getElementById('user-lastname');
var userContact = document.getElementById('user-contact');
var userContactV = document.getElementById('user-contactV');
var Email = document.getElementById('mail');
var EmailValue = document.getElementById('mail-value');
var emailSend = document.getElementById('email-send');




function formule(){
    formulary.style.display="block";
}
function valider(){
    console.log("salut");
    userName.innerHTML = "Nom:";
    userLast.innerHTML = "Postnom:";
    userContact.innerHTML = "contact:";
    userNameV.innerHTML = Name.value;
    userLastName.innerHTML = lastName.value;
    userContactV.innerHTML = contact.value;
    Name.value = "";
    lastName.value = "";
    contact.value ="";
}

function send(){
    Email.innerHTML = "Email:";
    EmailValue.innerHTML = emailSend.value;
    emailSend.value ="";
}
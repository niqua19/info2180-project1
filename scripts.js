/* Add your JavaScript to this file */

window.onload = function(){
    var button = document.querySelectorAll(".btn")[1];
        
    button.addEventListener('click', clicker);
}

function clicker(event){
    event.preventDefault();

    var email = document.getElementById("email").value;
    // alert(emailAddress)

    if(email != ""){
        document.getElementsByClassName("message")[0].innerHTML = "Thank You! Your email address " +email+ " has been added to our mailing list";
    }else{
        document.getElementsByClassName("message")[0].innerHTML = "please enter your email address";
    }
}
document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function (event) {
        event.preventDefault()

        let username = document.getElementById("username");
        let email = document.getElementById("email");
        let password = document.getElementById("password");

        username.value.trim();
        email.value.trim();
        password.value.trim();

        let isValid = true;
        let messages = [];

        if(username.length < 3){
           isValid = false;
           messages.push("length is too short")  
        }

        if (email !== "@" & "."){
            isValid = false;
            messages.push("Your Email is Wrong Formatted")
        }
        if (password.length >= 8){
            isValid = true;
        }

        else{
            isValid = false;
            messages.push("Your password is too short")
        }

        feedbackDiv.style.display = "block"
        if(isValid === true){
            feedbackDiv.textContent = "Registration successful!"
            feedbackDiv.color = "#28a745"
        }
        else{
            let message = messages.join("<br>");
            message.innerHTML = feedbackDiv;
            feedbackDiv.style.color = "#dc3545";


        }
   

    

    

    })
    

    

    

})
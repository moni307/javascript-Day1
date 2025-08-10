<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .error{
            color: red;
            font-size: x-large;
        }
    </style>
</head>
<body>
    <h2>Registration Form</h2>
    <form id="registrationForm"onsubmit="return validateForm()">
     <!--Name-->
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"required>
    <div id="nameError" class="error"></div>
    <br><br>
    <!--Email-->
    <label for="email">email:</label>
    <input type="email" id="email" name="email"required>
    <div id="emailError" class="error"></div>
    <br><br>
    <!--password-->
    <label for="password">password:</label>
    <input type="password" id="password" name="password"required>
    <div id="passwordError" class="error"></div>
    <br><br>
    <!--phone-->
    <label for="phone">phone:</label>
    <input type="phone" id="phone" name="phone"required>
    <div id="phoneError" class="error"></div>
    <br><br>
    <button type="submit">submit</button>
</form>
    <script>
function validateName(name){
    const regex=/^[A-Za-z\s]+$/;
    if(name.trim() === ""){
        return "Name cannot be empty";
    }
    if(!regex.test(name)){
        return "Name can only contain letters and spaces";
    }
    return "Name is valid";
}
function validateEmail(email){
    const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email.trim() === ""){
        return "email cannot be empty";
    }
    if(!regex.test(email)){
        return "Invalid email format";
    }
    return "email is valid";
}
function validatePassword(password){
    const regex=/^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(password.trim() === ""){
        return "password cannot be empty";
    }
    if(!regex.test(password)){
        return "password must be at least 8 characters long,contain an uppercase letter,and a number";
    }
    return "password is valid";
}
function validatePhone(phone){
    const regex=/^[0-9]{10}$/
    if(phone.trim() === ""){
        return "phone number cannot be empty";
    }
    if(!regex.test(phone)){
        return "phone number must contain 10 digits";
    }
    return "mobile number is valid";
}
// Form validation
function validateForm() {
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const phone=document.getElementById("phone").value;

    const nameError=validateName(name);
    const emailError=validateEmail(email);
    const passwordError=validatePassword(password);
    const phoneError=validatePhone(phone);

    if (nameError === "Name is valid" && emailError === "Email is valid" && passwordError === "password is valid" && phoneError === "phone num is valid"){
        return true;
    }
    document.getElementById("nameError").innerText=nameError === "Name is valid"?"":nameError;
    document.getElementById("emailError").innerText=emailError === "Email is valid"?"":emailError;
    document.getElementById("passwordError").innerText=passwordError === "Password is valid"?"":passwordError;
    document.getElementById("phoneError").innerText=phoneError === "Phone is valid"?"":phoneError;
    return false;
}


    </script>

</body>
</html>

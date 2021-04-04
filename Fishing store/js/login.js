let userName = document.getElementById("user");
let passwordId = document.getElementById("password");
userName.addEventListener("change", function(){
    localStorage.setItem("name", userName.value);
    console.log("User name: " + userName.value);
});

password.addEventListener("change", function(){
    localStorage.setItem("password", passwordId.value);
    console.log("Password: ***");
});
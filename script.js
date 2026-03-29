function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "" || pass === "") {
        alert("Fill all fields");
    } else {
        alert("Login Successful");
        window.location.href = "index.html";
    }
}
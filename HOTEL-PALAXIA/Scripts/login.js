function login(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email === "customer@email.com" && password === "123456"){
        localStorage.setItem("loggedIn", "true");
        window.location.href = "../index.html";
    } else{
        document.getElementById('error').innerText = "Wrong email or password"
        }
}
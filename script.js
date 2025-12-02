// Show Register Page
function showRegister() {
    document.getElementById("login-page").classList.add("hidden");
    document.getElementById("register-page").classList.remove("hidden");
}

// Show Login Page
function showLogin() {
    document.getElementById("register-page").classList.add("hidden");
    document.getElementById("login-page").classList.remove("hidden");
}

// REGISTER
function register() {
    let username = document.getElementById("reg-username").value;
    let password = document.getElementById("reg-password").value;

    if (username === "" || password === "") {
        alert("Please fill in all fields!");
        return;
    }

    if (localStorage.getItem(username)) {
        alert("This username is already taken!");
        return;
    }

    localStorage.setItem(username, password);
    alert("Registration successful! You can now log in.");
    showLogin();
}

// LOGIN
function login() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    let storedPass = localStorage.getItem(username);

    if (storedPass === null) {
        alert("Account not found. Please register.");
        return;
    }

    if (storedPass !== password) {
        alert("Incorrect password!");
        return;
    }

    localStorage.setItem("loggedInUser", username);

    showPortfolio();
}

// Show the Portfolio Page
function showPortfolio() {
    document.getElementById("login-page").classList.add("hidden");
    document.getElementById("register-page").classList.add("hidden");
    document.getElementById("portfolio-page").classList.remove("hidden");
}

// LOGOUT
function logout() {
    localStorage.removeItem("loggedInUser");
    document.getElementById("portfolio-page").classList.add("hidden");
    document.getElementById("login-page").classList.remove("hidden");
}

// Auto-login if user already logged in
window.onload = () => {
    if (localStorage.getItem("loggedInUser")) {
        showPortfolio();
    }
};

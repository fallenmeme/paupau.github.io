// Toggle Login & Register
function switchForm(form) {
    document.getElementById("login-form").classList.toggle("hidden");
    document.getElementById("register-form").classList.toggle("hidden");
}

// Register User
function register() {
    let uname = document.getElementById("reg-username").value;
    let pwd = document.getElementById("reg-password").value;

    if (!uname || !pwd) {
        alert("All fields required!");
        return;
    }
    if (localStorage.getItem(uname)) {
        alert("Username already exists!");
        return;
    }

    localStorage.setItem(uname, pwd);
    alert("Registered successfully! Please log in.");
    switchForm("login");
}

// Login User
function login() {
    let uname = document.getElementById("login-username").value;
    let pwd = document.getElementById("login-password").value;

    let stored = localStorage.getItem(uname);
    if (!stored) {
        alert("User not found. Please register.");
        return;
    }
    if (stored !== pwd) {
        alert("Incorrect password.");
        return;
    }

    localStorage.setItem("loggedIn", uname);
    showPortfolio();
}

// Show Portfolio After Login
function showPortfolio() {
    document.getElementById("auth-container").classList.add("hidden");
    document.getElementById("portfolio-container").classList.remove("hidden");
}

// Logout
function logout() {
    localStorage.removeItem("loggedIn");
    document.getElementById("portfolio-container").classList.add("hidden");
    document.getElementById("auth-container").classList.remove("hidden");
}

// Auto-login if session exists
window.onload = () => {
    if (localStorage.getItem("loggedIn")) {
        showPortfolio();
    }
};

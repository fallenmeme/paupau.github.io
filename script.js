// Elements
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const authContainer = document.getElementById('auth-container');
const portfolioPage = document.getElementById('portfolio-page');
const userDisplay = document.getElementById('user-display');

const showRegisterLink = document.getElementById('show-register');
const showLoginLink = document.getElementById('show-login');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const logoutBtn = document.getElementById('logout-btn');

// Show register form
showRegisterLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.classList.add('hidden');
  registerForm.classList.remove('hidden');
});

// Show login form
showLoginLink.addEventListener('click', (e) => {
  e.preventDefault();
  registerForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});

// Register logic
registerBtn.addEventListener('click', () => {
  const u = document.getElementById('reg-username').value.trim();
  const p = document.getElementById('reg-password').value;

  if (!u || !p) {
    alert('Fill all fields');
    return;
  }
  if (localStorage.getItem('user_' + u)) {
    alert('Username already taken');
    return;
  }
  localStorage.setItem('user_' + u, p);
  alert('Registration success! You can login now.');
  registerForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});

// Login logic
loginBtn.addEventListener('click', () => {
  const u = document.getElementById('login-username').value.trim();
  const p = document.getElementById('login-password').value;

  const stored = localStorage.getItem('user_' + u);
  if (stored === null) {
    alert('No such user. Register first.');
    return;
  }
  if (stored !== p) {
    alert('Wrong password');
    return;
  }
  // success login
  localStorage.setItem('loggedInUser', u);
  showPortfolio(u);
});

// Logout logic
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('loggedInUser');
  portfolioPage.classList.add('hidden');
  authContainer.classList.remove('hidden');
});

// On page load: auto-login if already logged in
window.addEventListener('load', () => {
  const u = localStorage.getItem('loggedInUser');
  if (u) {
    showPortfolio(u);
  }
});

function showPortfolio(username) {
  userDisplay.textContent = username;
  authContainer.classList.add('hidden');
  portfolioPage.classList.remove('hidden');
}

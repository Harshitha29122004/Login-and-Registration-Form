function showLogin() {
  document.getElementById("registerBox").style.display = "none";
  document.getElementById("loginBox").style.display = "block";
}

function showRegister() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("registerBox").style.display = "block";
}

function register() {
  let user = document.getElementById("regUser").value;
  let pass = document.getElementById("regPass").value;

  if (user === "" || pass === "") {
    alert("Please fill all fields");
    return;
  }

  alert("Registration successful!");
  showLogin();
}

function login() {
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;

  if (user === "" || pass === "") {
    alert("Please enter username and password");
    return;
  }

  alert("Login successful!");
}
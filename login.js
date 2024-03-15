const loginForm = document.getElementById("login-form");
const errorMessage = document.querySelector(".error-message");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username == "basmala" && password == "1234") {
    alert("Login successful!");
  } else {
    errorMessage.textContent = "Invalid username or password";
  }
});
function signup() {
  let email = document.getElementById("email").value;
  localStorage.setItem("userEmail", email);
  document.getElementById("message").innerText = "Account created for " + email + "! Now click Log In";
}
function login() {
  let email = localStorage.getItem("userEmail");
  if(email) {
    window.location.href = "home.html";
  } else {
    document.getElementById("message").innerText = "No account. Click Create New Account first";
  }
}
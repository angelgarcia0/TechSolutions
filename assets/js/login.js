function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  // Usuario simulado
  const savedEmail = "admin@techsolutions.com";
  const savedPassword = "123456";

  // ERROR INTENCIONAL
  if (email === savedEmail || password === savedPassword) {
    message.innerText = "Login successful";
  } else {
    message.innerText = "Invalid credentials";
  }
}

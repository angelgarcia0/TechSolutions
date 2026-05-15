function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const message = document.getElementById("message");

  // ERROR INTENCIONAL
  // Permite registrar aunque las contraseñas sean diferentes

  if (
    name !== "" &&
    email !== "" &&
    password !== "" &&
    confirmPassword !== ""
  ) {
    message.style.color = "green";
    message.innerText = "User registered successfully";
  } else {
    message.style.color = "red";
    message.innerText = "All fields are required";
  }
}

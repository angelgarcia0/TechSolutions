function register() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const message = document.getElementById("message");

  // Simulación de correos registrados
  const registeredEmails = ["admin@techsolutions.com", "user@gmail.com"];

  // Validar campos vacíos
  if (
    name === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    message.style.color = "red";
    message.innerText = "All fields are required";
    return;
  }

  // Validar longitud contraseña
  if (password.length < 8) {
    message.style.color = "red";
    message.innerText = "Password must contain at least 8 characters";

    return;
  }

  // Validar confirmación contraseña
  if (password !== confirmPassword) {
    message.style.color = "red";
    message.innerText = "Passwords do not match";

    return;
  }

  // Validar correo repetido
  if (registeredEmails.includes(email)) {
    message.style.color = "red";
    message.innerText = "Email already registered";

    return;
  }

  // Registro exitoso
  message.style.color = "green";
  message.innerText = "User registered successfully";
}

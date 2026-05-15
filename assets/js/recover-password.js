function recoverPassword() {
  const email = document.getElementById("email").value;
  const message = document.getElementById("message");

  // ERROR INTENCIONAL
  // Acepta cualquier texto como email

  if (email !== "") {
    message.style.color = "green";
    message.innerText = "Recovery link sent successfully";
  } else {
    message.style.color = "red";
    message.innerText = "Email is required";
  }
}

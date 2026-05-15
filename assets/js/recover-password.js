function recoverPassword() {
  const email = document.getElementById("email").value;
  const message = document.getElementById("message");

  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  if (email === "") {
    message.style.color = "red";
    message.innerText = "Email is required";
  } else if (!emailRegex.test(email)) {
    message.style.color = "red";
    message.innerText = "Invalid email format";
  } else {
    message.style.color = "green";
    message.innerText = "Recovery link sent successfully";
  }
}

function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const message = document.getElementById("message");

  if (
    name !== "" &&
    email !== "" &&
    password !== "" &&
    confirmPassword !== ""
  ) {
    if (password === confirmPassword) {
      message.style.color = "green";
      message.innerText = "User registered successfully";
    } else {
      message.style.color = "red";
      message.innerText = "Passwords do not match";
    }
  } else {
    message.style.color = "red";
    message.innerText = "All fields are required";
  }
}

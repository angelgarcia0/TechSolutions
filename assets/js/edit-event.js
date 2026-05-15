function updateEvent() {
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const location = document.getElementById("location").value;
  const description = document.getElementById("description").value;

  const message = document.getElementById("message");

  if (title !== "" && date !== "" && location !== "" && description !== "") {
    message.style.color = "green";
    message.innerText = "Event updated successfully";
  } else {
    message.style.color = "red";
    message.innerText = "All fields are required";
  }
}

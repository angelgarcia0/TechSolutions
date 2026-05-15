function createEvent() {
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const location = document.getElementById("location").value;
  const description = document.getElementById("description").value;

  const message = document.getElementById("message");

  const currentDate = new Date().toISOString().split("T")[0];

  if (title !== "" && date !== "" && location !== "" && description !== "") {
    if (date >= currentDate) {
      message.style.color = "green";
      message.innerText = "Event created successfully";
    } else {
      message.style.color = "red";
      message.innerText = "Event date cannot be in the past";
    }
  } else {
    message.style.color = "red";
    message.innerText = "All fields are required";
  }
}

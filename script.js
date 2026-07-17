// Find the button and the message paragraph on the page
const button = document.getElementById("clickBtn");
const message = document.getElementById("message");

// When the button is clicked, show a message
button.addEventListener("click", () => {
  message.textContent = "🎉 You clicked the button! Great job.";
});

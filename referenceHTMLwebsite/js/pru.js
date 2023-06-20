// JavaScript
const button = document.getElementById("myButton");

// Event handler function
function handleClick(event) {
  console.log(event); // Logging the event object
  console.dir(button)
}

// Adding event listener
button.addEventListener("click", handleClick);
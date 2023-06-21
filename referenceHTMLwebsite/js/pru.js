// JavaScript


const buttonBar = document.querySelector('.button-bar');
const input = document.getElementById("fname");

console.dir(input)

input.addEventListener("focus", handlefocus)

function handlefocus (event) {
  console.log(event)
}

buttonBar.addEventListener("click", handleClick)

function handleClick (event) {

  console.log(event)
  buttonBar.style.background = event.target.dataset.color;
  console.log(event)

}


    


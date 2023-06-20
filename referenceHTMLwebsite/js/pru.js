// JavaScript


const buttonBar = document.querySelector('.button-bar');



buttonBar.addEventListener("click", handleClick)

function handleClick (event) {

  console.log(event)

  buttonBar.style.background = event.target.dataset.color;


}
    


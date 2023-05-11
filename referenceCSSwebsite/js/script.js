
export function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          
        info_html_template(rawFile.responseText);
      }
  }
  rawFile.send(null); 
}

function convertFirstLetterUpperCase(sentence) {
  return sentence.replace(/\b\w/g, function(match) {
      return match.toUpperCase();
  });
}

function info_html_template(text){
  
const Selectors = JSON.parse(text);
const hiddenMainContainer = document.getElementsByClassName("hidden_main_container");
const outsideContainer = document.getElementById("main");
const mainTitle = document.getElementById("mainTitle")


outsideContainer.innerHTML += `

<div class="card border-dark mb-3 shadow p-3 mb-5 bg-body-tertiary rounded" style="width: 80rem;">

<div class="card-header">${mainTitle.innerHTML}</div>
  <div class="card-body">
    <div class="main_container">
  
    </div>
  </div>

</div>`


Selectors.topic.map((subject) => {
  
  /*aqui codigo del tema*/
const mainContainer = document.getElementsByClassName("main_container");
  
  mainContainer[0].innerHTML += `
  <hr/>
  <hr/>
  <h2>${subject.title}</h2>
  <hr/>
  <p>${subject.description}</p>
  <hr/>`;

  subject.subject.map((selector) => {
    mainContainer[0].innerHTML += `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${selector.id}">${convertFirstLetterUpperCase(selector.titulo.toLowerCase())}</button>`;
  });

  subject.subject.map((selector) => {
    hiddenMainContainer[0].innerHTML += `<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
    <div class="modal fade" id=${selector.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">${selector.titulo}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
    
          <p>${selector.parrafo}</p>
          ${selector.codepen}

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    `;
  });
});
}


const jsonRoute = document.getElementById("jsonRoute");
readTextFile(jsonRoute.innerHTML);


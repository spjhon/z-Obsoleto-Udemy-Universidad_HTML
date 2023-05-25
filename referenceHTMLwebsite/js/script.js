//Funcion para leer un archivo json
function readTextFile(file) {
  fetch(file)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Unable to fetch JSON file');
      }
    })
    .then(data => {
      info_html_template(JSON.stringify(data));
    })
    .catch(error => {
      console.error(error);
    });
}

//funcion que aplica codigo html al DOM junto con los datos extraidos del json
function info_html_template(text){
  
  let modalDivs = "";
  let visibleDivs = "";
  const Selectors = JSON.parse(text);
  const hiddenMainContainer = document.getElementById("hidden_main_container");
  const outsideContainer = document.getElementById("main");
  const mainTitle = document.getElementById("mainTitle");
  const topicDescription = Selectors.topic_description;
  
  //Este codigo se agrego como una condiconal debido a un cambio personalizado de un de las paginas
  //la forma en que funciona es que si el elemento existe, se inyecta en el template
  //sin embargo es de aclarar que el template se agregaria al resto de las paginas del sitio
  //por tanto solo se deberia utilizar para websites mas no para webapps.
  //puede haber impacto en el performance  
  let img = document.getElementById("imgaPrueba");
  if (img !== null) {
    // El elemento existe
   img = `<img id="imgaPruebaRender" src="${img.alt}" alt="Imagen Introductoria" width="400" >`
  }else{
    img = ""
  }
  
  outsideContainer.classList.add("d-flex", "justify-content-around")//este class list toco agregarlo ya que sale error al inyectar el div ya que hace conflicto al cargar la sidebar

  //Cuadro exterior donde se encuentra el titulo principal de la seccion
  outsideContainer.innerHTML += `
  <div class="card border-dark mb-3 shadow p-3 mb-5 bg-body-tertiary rounded" style="max-width: 80rem;">

    <div class="card-header">
      ${mainTitle.innerHTML}
    </div>

    <div id="generalDescr">${topicDescription}</div>
    
    ${img /*imagen agregada como contenido perzonalizado en pseudo-elements.html*/}  
    
    <div class="card-body">
      <div id="main_container">
      </div>
    </div>

  </div>`;
  
  const mainContainer = document.getElementById("main_container");

  //Con este map se mapea cada uno de los subtemas y se inyectan en el cuadro exterior junto con sus botones
  Selectors.topic.map((subject) => {
    
    visibleDivs += `
    <hr/>
    <hr/>
    <h2>${subject.title}</h2>
    <hr/>
    <p>${subject.description}</p>
    <hr/>`;
    
    subject.subject.map((selector) => {
      visibleDivs += `<button id="button${selector.id}" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${selector.id}">${selector.titulo}</button>`;
      
      modalDivs += `
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
      </div>`;
    });
  });
  
  mainContainer.innerHTML = visibleDivs;
  hiddenMainContainer.innerHTML = modalDivs;
  
}

//aqui se lee la ruta del json cuando se carga cada pagina y se le adiciona la ruta del json al readtetfile
const jsonRoute = document.getElementById("jsonRoute");
readTextFile(jsonRoute.innerHTML);

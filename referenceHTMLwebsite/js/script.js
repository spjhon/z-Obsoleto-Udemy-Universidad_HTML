var hljs = require('highlight.js'); // https://highlightjs.org

// Actual default values
var md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  }
});


// Wait for the page to load
window.addEventListener('load', function() {
  // Show the div by removing the "hidden" class
  let div = document.getElementById('myBody');
  div.classList.remove('hidden');
  
  // Create a new instance of markdownIt
  
  /*Example usage
  const markdownText = '# Hello, markdown-it!';
  const html = md.render(markdownText);
  console.log(html);*/
});
 

///this are functions created by CHATgpt, ALL THIS FUNCTIONS ARENT NECESARRY THANKS TO MARKDOWN

//function created by CHATgtp to add a <br> everytime it finds a period "." expect when the period its inside a <code> that
// this tags are inside the json and is bad practice. be aware
function addBrAfterEmptySpace(text) {
  let output = '';
  let withinCodeTag = false;
  let lastChar = '';

  for (let i = 0; i < text.length; i++) {
    const currentChar = text[i];

    if (currentChar === '<' && text[i + 1] === 'c' && text[i + 2] === 'o' && text[i + 3] === 'd' && text[i + 4] === 'e' && text[i + 5] === '>') {
      withinCodeTag = true;
      output += text.substring(i, i + 6);
      i += 5;
    } else if (currentChar === '<' && text[i + 1] === '/' && text[i + 2] === 'c' && text[i + 3] === 'o' && text[i + 4] === 'd' && text[i + 5] === 'e' && text[i + 6] === '>') {
      withinCodeTag = false;
      output += text.substring(i, i + 7);
      i += 6;
    } else if (currentChar === ' ' && text[i + 1] === ' ' && !withinCodeTag && lastChar !== '/') {
      output += ' ' + '<br>';
      i++;
    } else {
      output += currentChar;
    }

    lastChar = currentChar;
  }

  return output;
}

//this function created by chatgpt add <code> before and everytime it finds &lt;
//and add </code> after and everytime it finds &gt;
function addCodeTags(text) {
  text = text.replace(/&lt;/g, '<code>&lt;');   // Replace &lt; with <code>&lt;
  text = text.replace(/&gt;/g, '&gt;</code>'); // Replace &gt; with &gt;</code>
  return text;
}

//this is a function created by chatgpt to put the <strong> tag to word with "-" at the beggining
function addStrongTags(str) {
  const regex = /-\s(.*?):/g;
  return str.replace(regex, '<strong>-$1:</strong>');
}

//This function created by chatgpt put "      " simulatin a tab everytime it finds the simbol "*".
function replaceAsteriskWithSpace(text) {
  let regex = /\*/g; // Regular expression to match all occurrences of *
  let replacedText = text.replace(regex, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'); // Replace * with &nbsp;
  return replacedText;
}


/// this is the script to read the json, formated and inyected in a html template to every page that
/// calls this script

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

function readMarkTextFile(file) {
  fetch(file)
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('Unable to fetch MARKDOWN file');
      }
    })
    .then(data => {
      info_markdown_template(data);
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

    <div id="generalDescr">${replaceAsteriskWithSpace(addStrongTags(addBrAfterEmptySpace(addCodeTags(topicDescription))))}</div>
    
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
    <p>${addStrongTags(replaceAsteriskWithSpace(addBrAfterEmptySpace(addCodeTags(subject.description))))}</p>
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
              <p>${replaceAsteriskWithSpace(addStrongTags(addBrAfterEmptySpace(addCodeTags(selector.parrafo))))}</p>
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

  
  hiddenMainContainer.innerHTML = modalDivs;
  mainContainer.innerHTML = visibleDivs;
  
}

//this function created with chatgpt extract text that is markdown between some other text
function extractId(input) {
  let regex = /<!--id-->\r\n([\s\S]*?)\r\n<!--id-->/g;
  let matches = [];
  let match;

  while ((match = regex.exec(input)) !== null) {
    matches.push(match[1]);
  }

  return matches;
}

function extractTitulo(input) {
  let regex = /<!--titulo-->([\s\S]*?)<!--titulo-->/g;
  let matches = [];
  let match;

  while ((match = regex.exec(input)) !== null) {
    matches.push(match[1]);
  }

  return matches;
}

function extractParrafo(input) {
  let regex = /<!--parrafo-->([\s\S]*?)<!--parrafo-->/g;
  let matches = [];
  let match;

  while ((match = regex.exec(input)) !== null) {
    matches.push(match[1]);
  }

  return matches;
}

function extractCodePen(input) {
  let regex = /<!--codepen-->([\s\S]*?)<!--codepen-->/g;
  let matches = [];
  let match;

  while ((match = regex.exec(input)) !== null) {
    matches.push(match[1]);
  }

  return matches;
}

function escapeSymbols(text) {
  let escapedText = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return escapedText;
}

function info_markdown_template(data){

  let modalDivs = "";
  let visibleDivs = "";
  const mainContainer = document.getElementById("main_container");
  const hiddenMainContainer = document.getElementById("hidden_main_container");
  const outsideContainer = document.getElementById("main");
  const mainTitle = document.getElementById("mainTitle");

  const rawId = extractId(data);
  const rawTitulo = extractTitulo(data);
  const rawParrafo = extractParrafo(data);
  const rawCodePen = extractCodePen(data);

  
  const contents = {
    id: rawId,
    titulo: rawTitulo,
    parrafo: rawParrafo,
    codepen: rawCodePen,
  }

    
  
  contents.id.map((content, index) => {
    visibleDivs += `<button id="button${contents.id[index]}" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${contents.id[index]}">${escapeSymbols(contents.titulo[index])}</button>`;
    modalDivs += `
    <div class="modal fade" id=${contents.id[index]} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
        <div class="modal-content">

          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">${md.render(contents.titulo[index])}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">      
            ${md.render(contents.parrafo[index])}
            ${contents.codepen[index]}
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>

        </div>
      </div>
    </div>`;
  });
  
  hiddenMainContainer.innerHTML += modalDivs;
  mainContainer.innerHTML += visibleDivs;


  
};

//aqui se lee la ruta del json cuando se carga cada pagina y se le adiciona la ruta del json al readtetfile
const jsonRoute = document.getElementById("jsonRoute");
const markdownRoute = document.getElementById("markdownRoute");

readTextFile(jsonRoute.innerHTML);
readMarkTextFile(markdownRoute.innerHTML);


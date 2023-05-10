

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null); 
}

function convertFirstLetterUpperCase(sentence) {
  return sentence.replace(/\b\w/g, function(match) {
    return match.toUpperCase();
  });
}

//usage:
readTextFile("../json/content.json", function(text){
  const Selectors = JSON.parse(text);
  console.log(text)
  const hiddenMainContainer = document.getElementsByClassName("hidden_main_container");

  

  Selectors.Selectors_Specificity.map((subject) => {
    
    /*aqui codigo del tema*/
  const mainContainer = document.getElementsByClassName("main_container");
    
    mainContainer[0].innerHTML += `
    <hr/>
    <hr/>
    <h2>${subject.topic}</h2>
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
});


/*
const Selectors2 = [
  {
    id: "selector1",
    titulo: "UNIVERSAL SELECTOR",
    parrafo: 
    `<p>Uno de los mas poderosos, baja especividad, alto costo en performance (tiene que chekear cada elemento haber si coincide). One common use of the universal selector is in a "reset" or "normalize" CSS file.</p>
    <p>se puede combinar por ejemplo plate * como se mostro en el ejemplo del ejercicio de los platos para seleccionar todos los platos</p>`,
    codepen:
    `<iframe height="300" style="width: 100%;" scrolling="no" title="Universal Selector" src="https://codepen.io/spjhon/embed/GRYOygy?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/spjhon/pen/GRYOygy">
    Universal Selector</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>`
  },
  {
    id: "selector2",
    titulo: "TYPE SELECTOR OR ELEMENT SELECTOR OR TAG SELECTOR",
    parrafo: 
    `<p>cuando se busca por tipo (ojo afecta a todos los que sean de este tipo)</p>`,
    codepen:
    `<iframe height="300" style="width: 100%;" scrolling="no" title="Type Selector" src="https://codepen.io/spjhon/embed/RwejxWj?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/spjhon/pen/RwejxWj">
    Type Selector</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>`
  },
  {
    id: "selector3",
    titulo: "CLASS SELECTOR",
    parrafo: 
    `<p>Cuando se busca por clase</p>`,
    codepen:
    `<iframe height="300" style="width: 100%;" scrolling="no" title="Class Selector" src="https://codepen.io/spjhon/embed/QWZOaNo?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/spjhon/pen/QWZOaNo">
    Class Selector</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>`
  },
  {
    id: "selector4",
    titulo: "ID SELECTOR",
    parrafo: 
    `<p>NO UTILIZARLOS TAN SEGUIDOS, SOLO CUANDO SEA IMPRESINDIBLE, OJO LOS IDS NO SE PUEDEN REPETIR EN UNA PAGINA El elemento con id="demo"</p>`,
    codepen:
    `<iframe height="300" style="width: 100%;" scrolling="no" title="Id Selector" src="https://codepen.io/spjhon/embed/ZEqavpE?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/spjhon/pen/ZEqavpE">
    Id Selector</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>`
  },
  {
    id: "selector5",
    titulo: "ATRIBUTE SELECTOR",
    parrafo: 
    `<p>Por ejemplo, a[tittle] selecciona elementos a> con un atributo title.</p>
    <p>Selectores de atributos avanzados: Además de los selectores de atributos básicos que mencioné anteriormente, hay algunos selectores de atributos más 
      avanzados que se pueden utilizar para seleccionar elementos con atributos específicos que cumplen ciertas condiciones. Por ejemplo, input[type="text"]:focus 
      seleccionará un campo de texto cuando esté en foco.</p>`,
    codepen:
    `<iframe height="300" style="width: 100%;" scrolling="no" title="Atribute Selector" src="https://codepen.io/spjhon/embed/OJBOzxa?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/spjhon/pen/OJBOzxa">
    Atribute Selector</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>`
  },
  {
    id: "selector6",
    titulo: "GROUPING SELECTORS",
    parrafo: 
    `<p>Cuando se agrupa es para que los atributos se apliquen a ambas clases y luego cada clase tiene sus propios atributos</p>`,
    codepen:
    `<iframe height="300" style="width: 100%;" scrolling="no" title="Grouping Selectors" src="https://codepen.io/spjhon/embed/xxyPpzr?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/spjhon/pen/xxyPpzr">
    Grouping Selectors</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>`
  },
  {
    id: "selector7",
    titulo: "CHAINING SELECTORS",
    parrafo: 
    `<p>Cuando se agrupa es para que los atributos se apliquen cuando los elementos tengan al mismo tiempo lo que el selector posee</p>
    <p>Selectores anidados: Es posible anidar selectores en CSS para seleccionar elementos más específicos. Por ejemplo, ul li a seleccionará todos los 
      elementos a que se encuentren dentro de una lista (ul) y dentro de un elemento de lista (li).</p>`,
    codepen:
    `<iframe height="300" style="width: 100%;" scrolling="no" title="Chaining Selectors" src="https://codepen.io/spjhon/embed/YzJEYjL?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/spjhon/pen/YzJEYjL">
    Chaining Selectors</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>`
  },
  {
    id: "selector8",
    titulo: "SELECTOR DESCENDENTE",
    parrafo: 
    `<p>por ejemplo, div p seleccionará todos los elementos p que son descendientes de un elemento div. La clase que se aplica a un padre pasa a los hijos, como se puede apreciar la clase list aplica a TODOS los hijos el selector li busca los li y aplica el selector li li busca los hijos de li y aplica</p>`,
    codepen:
    `<iframe height="300" style="width: 100%;" scrolling="no" title="Descendent Combinator Selector" src="https://codepen.io/spjhon/embed/WNaXdLe?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/spjhon/pen/WNaXdLe">
    Descendent Combinator Selector</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>`
  },
  {
    id: "selector9",
    titulo: "CHILD SELECTOR, SELECTOR DE HILO DIRECTO",
    parrafo: 
    `<p>selecciona elementos que son hijos directos de otro elemento (por ejemplo, div > p seleccionará todos los elementos p que son hijos directos de un elemento div).</p>`,
    codepen:
    `<iframe height="300" style="width: 100%;" scrolling="no" title="Child Selector Combinator" src="https://codepen.io/spjhon/embed/qBJVpLV?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/spjhon/pen/qBJVpLV">
    Child Selector Combinator</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>`
  },
  {
    id: "selector10",
    titulo: "ADJACENT SIBLING SELECTOR",
    parrafo: 
    `<p>por ejemplo, h1 + p seleccionará el primer elemento p que sigue inmediatamente después de un elemento h1</p>`,
    codepen:
    `<iframe height="300" style="width: 100%;" scrolling="no" title="Adjacent Sibiling  Selector" src="https://codepen.io/spjhon/embed/VwEryNd?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/spjhon/pen/VwEryNd">
    Adjacent Sibiling  Selector</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>`
  },

  {
    id: "selector11",
    titulo: "SELECTOR HERMANO GENERAL",
    parrafo: 
    `<p>selecciona TODOS los elementos que siguen después de otro elemento (por ejemplo, h1 ~ p seleccionará todos los elementos p que siguen después de un elemento h1)</p>
    <p>NOTA: La diferencia entre descendiente e hijo, es que el hijo es el directo descendiente (solo un nivel de profundidad), mientras que el 
      descendiente es el que esta a cualquier nivel de profundidad.</p>`,
    codepen:
    `<iframe height="300" style="width: 100%;" scrolling="no" title="General sibling combinator" src="https://codepen.io/spjhon/embed/dygZJEK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/spjhon/pen/dygZJEK">
    General sibling combinator</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>`
  },
];

console.log(JSON.stringify(Selectors2));

const mainContainer2 = document.getElementsByClassName("main_container2");

  Selectors2.map((selector) => {
    mainContainer2[0].innerHTML += `<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
    <div class="modal fade" id=${selector.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${selector.titulo}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
      
            ${selector.parrafo}
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

*/




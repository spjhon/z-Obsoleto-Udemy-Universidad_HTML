const mainContainer = document.getElementsByClassName("main_container");

const Selectors = [
  {
    id: "selector1",
    titulo: "UNIVERSAL SELECTOR",
    parrafo: 
    `<p>Uno de los mas poderosos, baja especividad, alto costo en performance (tiene que chekear cada elemento haber si coincide). One common use of the universal selector is in a "reset" or "normalize" CSS file.</p>
    <p>se puede combinar por ejemplo plate * como se mostro en el ejemplo del ejercicio de los platos para seleccionar todos los platos</p>`,
    codepen:
    `<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="GRYOygy" data-user="spjhon" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
    <span>See the Pen <a href="https://codepen.io/spjhon/pen/GRYOygy">
    Universal Selector</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
    on <a href="https://codepen.io">CodePen</a>.</span>
    </p>`
  },
  {
    id: "selector2",
    titulo: "TYPE SELECTOR OR ELEMENT SELECTOR OR TAG SELECTOR",
    parrafo: 
    `<p>cuando se busca por tipo (ojo afecta a todos los que sean de este tipo)</p>`,
    codepen:
    `<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="RwejxWj" data-user="spjhon" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
    <span>See the Pen <a href="https://codepen.io/spjhon/pen/RwejxWj">
    Type Selector</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
    on <a href="https://codepen.io">CodePen</a>.</span>
    </p>`
  },
  {
    id: "selector3",
    titulo: "CLASS SELECTOR",
    parrafo: 
    `<p>Cuando se busca por clase</p>`,
    codepen:
    `<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="QWZOaNo" data-user="spjhon" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
    <span>See the Pen <a href="https://codepen.io/spjhon/pen/QWZOaNo">
    Class Selector</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
    on <a href="https://codepen.io">CodePen</a>.</span>
  </p>`
  },
  {
    id: "selector4",
    titulo: "ID SELECTOR",
    parrafo: 
    `<p>NO UTILIZARLOS TAN SEGUIDOS, SOLO CUANDO SEA IMPRESINDIBLE, OJO LOS IDS NO SE PUEDEN REPETIR EN UNA PAGINA El elemento con id="demo"</p>`,
    codepen:
    `<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="ZEqavpE" data-user="spjhon" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
    <span>See the Pen <a href="https://codepen.io/spjhon/pen/ZEqavpE">
    Id Selector</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
    on <a href="https://codepen.io">CodePen</a>.</span>
    </p>`
  },
];

Selectors.map((selector) => {
  console.log(selector.titulo);
  mainContainer[0].innerHTML += `
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
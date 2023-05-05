const miArticulo = {
   1:{
    "titulo": "Título del primer artículo",
    "parrafo": "Este es el contenido del primer artículo en un párrafo.",
    "codepen": "codepen"
    },
   id2:{
    "titulo": "Título del segundo artículo",
    "parrafo": "Este es el contenido del segundo artículo en un párrafo.",
    "codepen": "codepen"
  }
};

  const mainContainer = document.getElementsByClassName("main_container");

  console.log(Object.keys(miArticulo).length);

  const mainDiv =   `
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">${miArticulo.id2.titulo}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
    
        <p>Cuando se busca por clase</p>
        <p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="QWZOaNo" data-user="spjhon" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
          <span>See the Pen <a href="https://codepen.io/spjhon/pen/QWZOaNo">
          Class Selector</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
          on <a href="https://codepen.io">CodePen</a>.</span>
        </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;

mainContainer[0].innerHTML = mainDiv;


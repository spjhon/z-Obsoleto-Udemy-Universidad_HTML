const iframeJson = {
  
    title: ":any-link",
    description: "It matches every a or area element that has an href attribute. Thus, it matches all elements that match :link or :visited.",
    subject: [
      {
        id: "003",
        titulo: ":autofill",
        parrafo: "Ejemplo de un :any-link",
        codepen: `<iframe height="300" style="width: 100%;" scrolling="no" title="Pseudo-Clase :default" src="https://codepen.io/spjhon/embed/ExdwOyB?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/spjhon/pen/ExdwOyB">
        Pseudo-Clase :default</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>`
      }
    ]
}




const json = JSON.stringify(iframeJson);

console.log(json);
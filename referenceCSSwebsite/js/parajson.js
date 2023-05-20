const iframeJson = {
  
    title: ":any-link",
    description: "It matches every a or area element that has an href attribute. Thus, it matches all elements that match :link or :visited.",
    subject: [
      {
        id: "007",
        titulo: "Ejemplo :any-link",
        parrafo: "Ejemplo de un :any-link",
        codepen: `<iframe height="300" style="width: 100%;" scrolling="no" title="Pseudo-Clase :active" src="https://codepen.io/spjhon/embed/oNaQJee?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/spjhon/pen/oNaQJee">
  Pseudo-Clase :active</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>`
      }
    ]
}




const json = JSON.stringify(iframeJson);

console.log(json);
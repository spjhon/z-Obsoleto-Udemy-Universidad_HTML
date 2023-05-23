const iframeJson = {
  
    title: ":any-link",
    description: "It matches every a or area element that has an href attribute. Thus, it matches all elements that match :link or :visited.",
    subject: [
      {
        id: "001",
        titulo: "doctype",
        parrafo: "Defines the document type. The declaration is not an HTML tag. It is an \"information\" to the browser about what document type to expect.",
        codepen: `<iframe height="300" style="width: 100%;" scrolling="no" title="001-&lt;!DOCTYPE&gt;" src="https://codepen.io/spjhon/embed/MWPLvwz?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/spjhon/pen/MWPLvwz">
        001-&lt;!DOCTYPE&gt;</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>`
      }
    ]
}




const json = JSON.stringify(iframeJson);

console.log(json);
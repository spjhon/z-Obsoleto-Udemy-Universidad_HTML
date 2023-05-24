const iframeJson = {
  
    title: "TITLE",
    description: "DESCRIPTION",
    subject: [
      {
        id: "001",
        titulo: "HTML <!--...--> Tag",
        parrafo: "The comment tag is used to insert comments in the source code. Comments are not displayed in the browsers. You can use comments to explain your code, which can help you when you edit the source code at a later date. This is especially useful if you have a lot of code.",
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
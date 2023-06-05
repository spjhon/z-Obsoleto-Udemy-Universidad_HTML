function escapeSymbols(text) {
  let escapedText = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return escapedText;
}

const newJson = {
  id: "007",
        titulo: escapeSymbols("HTML <bdo> Tag"),
        parrafo: escapeSymbols("BDO stands for Bi-Directional Override. Specify the text direction.    - ATRIBUTOS:    dir:  The direction in which text should be rendered in this element's contents. Possible values are: ltr: Indicates that the text should go in a left-to-right direction, rtl: Indicates that the text should go in a right-to-left direction.    - Default CSS Settings: <bdo {unicode-bidi: bidi-override;}>"),
        codepen: `<iframe height="300" style="width: 100%;" scrolling="no" title="HTML &lt;bdo&gt; Tag" src="https://codepen.io/spjhon/embed/vYVoeYB?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/spjhon/pen/vYVoeYB">
        HTML &lt;bdo&gt; Tag</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>`
}

const json = JSON.stringify(newJson);



console.log(json);
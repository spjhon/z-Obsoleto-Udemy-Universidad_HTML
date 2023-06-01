function escapeSymbols(text) {
  let escapedText = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return escapedText;
}

const newJson = {
  id: "007",
        titulo: escapeSymbols("HTML <abbr> Tag"),
        parrafo: escapeSymbols("The <abbr> tag defines an abbreviation or an acronym, like \"HTML\", \"CSS\", \"Mr.\", \"Dr.\", \"ASAP\", \"ATM\".      - ATRIBUTOS:    This element only supports the global attributes.  title: The optional title attribute can provide an expansion for the abbreviation or acronym when a full expansion is not present. The title attribute has a specific semantic meaning when used with the <abbr> element; it must contain a full human-readable description or expansion of the abbreviation. This text is often presented by browsers as a tooltip when the mouse cursor is hovered over the element.  - Default CSS Settings: <body {display: block; margin: 8px;} body:focus {outline: none;}>"),
        codepen: `<iframe height="300" style="width: 100%;" scrolling="no" title="HTML &lt;abbr&gt; Tag" src="https://codepen.io/spjhon/embed/vYVoBZG?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/spjhon/pen/vYVoBZG">
        HTML &lt;abbr&gt; Tag</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>`
}

const json = JSON.stringify(newJson);



console.log(json);
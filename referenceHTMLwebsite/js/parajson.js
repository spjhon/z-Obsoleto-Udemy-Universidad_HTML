function escapeSymbols(text) {
  let escapedText = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return escapedText;
}

const newJson = {
  id: "007",
        titulo: escapeSymbols("HTML <h1> to <h6> Tags"),
        parrafo: escapeSymbols("The <h1> to <h6> tags are used to define HTML headings. <h1> defines the most important heading. <h6> defines the least important heading.    - Note: Only use one <h1> per page - this should represent the main heading/subject for the whole page. Also, do not skip heading levels - start with <h1>, then use <h2>, and so on.        - Default CSS Settings: <body {display: block; margin: 8px;} body:focus {outline: none;}>"),
        codepen: `<iframe height="300" style="width: 100%;" scrolling="no" title="HTML &lt;h1&gt; to &lt;h6&gt; Tags" src="https://codepen.io/spjhon/embed/poxByLz?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/spjhon/pen/poxByLz">
        HTML &lt;h1&gt; to &lt;h6&gt; Tags</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>`
}

const json = JSON.stringify(newJson);



console.log(json);
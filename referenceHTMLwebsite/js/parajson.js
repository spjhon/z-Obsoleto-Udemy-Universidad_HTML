function escapeSymbols(text) {
  let escapedText = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return escapedText;
}

const newJson = {
  id: "004",
        titulo: escapeSymbols("HTML <head> Tag"),
        parrafo: escapeSymbols("The <head> element is a container for metadata (data about data) and is placed between the <html> tag and the <body> tag. Metadata is data about the HTML document. Metadata is not displayed. Metadata typically define the document title, character set, styles, scripts, and other meta information.The following elements can go inside the <head> element: <title> (required in every HTML document). <style>.<base>.<link>.<meta>.<script>.<noscript>"),
        codepen: `<iframe height="300" style="width: 100%;" scrolling="no" title="004-HTML &lt;head&gt; Tag" src="https://codepen.io/spjhon/embed/ExdMQmg?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/spjhon/pen/ExdMQmg">
        004-HTML &lt;head&gt; Tag</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>`
}

const json = JSON.stringify(newJson);



console.log(json);
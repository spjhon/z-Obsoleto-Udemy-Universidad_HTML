<!--id-->
016
<!--id-->
<!--titulo-->
HTML <blockquote> Tag
<!--titulo-->
<!--parrafo-->
A section that is quoted from another source. **Tip:** Use `<q>` for inline (short) quotations.  

**Default CSS Settings:**  
```css
blockquote {
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 40px;
  margin-right: 40px;}
```
<!--parrafo-->
<!--codepen-->
<iframe  height="300"  style="width: 100%;"  scrolling="no"  title="HTML &lt;blockquote&gt; Tag"  src="https://codepen.io/spjhon/embed/JjePVOr?default-tab=html%2Cresult"  frameborder="no"  loading="lazy"  allowtransparency="true"  allowfullscreen="true">
See the Pen <a  href="https://codepen.io/spjhon/pen/JjePVOr">
HTML &lt;blockquote&gt; Tag</a> by Juan Camilo (<a  href="https://codepen.io/spjhon">@spjhon</a>)
on <a  href="https://codepen.io">CodePen</a>.
</iframe>
<!--codepen-->
<!--tooltiptext-->
Defines a long quotation.
<!--tooltiptext-->


<!--id-->
017
<!--id-->
<!--titulo-->
HTML <cite> Tag
<!--titulo-->
<!--parrafo-->
The `<cite>` tag defines the title of a creative work (e.g. a book, a poem, a song, a movie, a painting, a sculpture, etc.).  
To include a reference to the source of quoted material which is contained within a `<blockquote>` or `<q>` element, use the cite attribute on the element.  

**Note:** A person's name is not the title of a work.

**Default CSS Settings:**  
```css
cite {
  font-style: italic;
}
```
<!--parrafo-->
<!--codepen-->
<iframe height="300" style="width: 100%;" scrolling="no" title="HTML &lt;cite&gt; Tag" src="https://codepen.io/spjhon/embed/JjejeKQ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/spjhon/pen/JjejeKQ">
  HTML &lt;cite&gt; Tag</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<!--codepen-->
<!--tooltiptext-->
Defines the source of a creative work.
<!--tooltiptext-->


<!--id-->
018
<!--id-->
<!--titulo-->
HTML <code> Tag
<!--titulo-->
<!--parrafo-->
The `<code>` tag is used to define a piece of computer code. The content inside is displayed in the browser's default monospace font.  

**Note:** To represent multiple lines of code, wrap the `<code>` element within a `<pre>` element. The `<code>` element by itself only represents a single phrase of code or line of code.  

**Default CSS Settings:**  
```css
code {
  font-family: monospace;
}
```
<!--parrafo-->
<!--codepen-->
<iframe height="300" style="width: 100%;" scrolling="no" title="HTML &lt;code&gt; Tag" src="https://codepen.io/spjhon/embed/VwVwgLG?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/spjhon/pen/VwVwgLG">
  HTML &lt;code&gt; Tag</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<!--codepen-->
<!--tooltiptext-->
Defines a snippet of code within a block of text.
<!--tooltiptext-->


<!--id-->
019
<!--id-->
<!--titulo-->
HTML <del> Tag
<!--titulo-->
<!--parrafo-->
The `<del>` tag defines text that has been deleted from a document. Browsers will usually strike a line through deleted text.  

**Tip:** Tip: Also look at the `<ins>` tag to markup inserted text.  

**Attributes:**
- **cite:** Specifies a URL to a document that explains the reason why the text was deleted/changed.  
  - "URL": Specifies the address to the document that explains why the text was deleted. Could be **An absolute** URL or **A relative URL**  
- **datetime:** Specifies the date and time of when the text was deleted/changed.  
  - "YYYY-MM-DDThh:mm:ssTZD": Specifies the date and time of when the text was deleted/changed. **Note:** The datetime attribute has no visual effect in ordinary web browsers, but can be used by screen readers.  

**Default CSS Settings:**  
```css
del {
  text-decoration: line-through;
}
```
<!--parrafo-->
<!--codepen-->
<iframe height="300" style="width: 100%;" scrolling="no" title="HTML &lt;del&gt; Tag" src="https://codepen.io/spjhon/embed/GRwRzMV?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/spjhon/pen/GRwRzMV">
  HTML &lt;del&gt; Tag</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<!--codepen-->
<!--tooltiptext-->
Defines text that has been deleted from a document
<!--tooltiptext-->


<!--id-->
020
<!--id-->
<!--titulo-->
HTML <dfn> Tag
<!--titulo-->
<!--parrafo-->
The `<dfn>` tag stands for the "definition element", and it specifies a term that is going to be defined within the content.  
The nearest parent of the `<dfn>` tag must also contain the definition/explanation for the term.  

**Tip:** If you want to highlight and define specific terms within a paragraph or other text content, using `<dfn>` can be more appropriate. If you have a list of terms and their definitions, using `<dl>` with `<dt>` and `<dd>` elements provides a clear and structured representation.  

**Attributes:**
- **title:** The title global attribute has special meaning    

**Default CSS Settings:**  
```css
dfn {
  font-style: italic;
};
```
<!--parrafo-->
<!--codepen-->
<iframe height="300" style="width: 100%;" scrolling="no" title="HTML &lt;dfn&gt; Tag" src="https://codepen.io/spjhon/embed/xxQxBow?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/spjhon/pen/xxQxBow">
  HTML &lt;dfn&gt; Tag</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<!--codepen-->
<!--tooltiptext-->
Defines where a term is defined within a web page.
<!--tooltiptext-->


<!--id-->
021
<!--id-->
<!--titulo-->
HTML <em> Tag
<!--titulo-->
<!--parrafo-->
The `<em>` tag is used to define emphasized text. The content inside is typically displayed in italic.  
A screen reader will pronounce the words in `<em>` with an emphasis, using verbal stress.  

**Tip:** The `<em>` element is for words that have a stressed emphasis compared to surrounding text.  

**Attributes:**
- No atributes    

**Default CSS Settings:**  
```css
em {
  font-style: italic;
}
```
<!--parrafo-->
<!--codepen-->
<iframe height="300" style="width: 100%;" scrolling="no" title="HTML &lt;em&gt; Tag" src="https://codepen.io/spjhon/embed/gOQOyXj?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/spjhon/pen/gOQOyXj">
  HTML &lt;em&gt; Tag</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<!--codepen-->
<!--tooltiptext-->
Defines emphasis on text. Is usually rendered as italic text.
<!--tooltiptext-->

<!--id-->
022
<!--id-->
<!--titulo-->
HTML <i> Tag
<!--titulo-->
<!--parrafo-->
The `<i>` tag defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic.  

**Tip:** Use the <i> element only when there is not a more appropriate semantic element, such as:  
- <em> to indicate stress emphasis.
- <strong> to indicate importance, seriousness, or urgency.
- <mark> to indicate relevance.
- <cite> to mark up the name of a work, such as a book, play, or song.
- <dfn> to mark up the defining instance of a term. 

**Attributes:**
- No atributes    

**Default CSS Settings:**  
```css
i {
  font-style: italic;
}
```
<!--parrafo-->
<!--codepen-->
<iframe height="300" style="width: 100%;" scrolling="no" title="HTML &lt;i&gt; Tag" src="https://codepen.io/spjhon/embed/bGQGPgr?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/spjhon/pen/bGQGPgr">
  HTML &lt;i&gt; Tag</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<!--codepen-->
<!--tooltiptext-->
Defines emphasis on text. Is usually rendered as italic text.
<!--tooltiptext-->


<!--id-->
023
<!--id-->
<!--titulo-->
HTML <ins> Tag
<!--titulo-->
<!--parrafo-->
The `<ins>` tag defines a text that has been inserted into a document. Browsers will usually underline inserted text.  

**Tip:** It uses the same attributes as `<del>`. cite and datetime

**Attributes:**
- No atributes    

**Default CSS Settings:**  
```css
ins {
  text-decoration: underline;
}
```
<!--parrafo-->
<!--codepen-->
<iframe height="300" style="width: 100%;" scrolling="no" title="HTML &lt;ins&gt; Tag" src="https://codepen.io/spjhon/embed/qBQBzmW?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/spjhon/pen/qBQBzmW">
  HTML &lt;ins&gt; Tag</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<!--codepen-->
<!--tooltiptext-->
Defines a text that has been inserted into a document
<!--tooltiptext-->


<!--id-->
024
<!--id-->
<!--titulo-->
HTML <kbd> Tag
<!--titulo-->
<!--parrafo-->
The `<kbd>` tag is used to define keyboard input. The content inside is displayed in the browser's default monospace font.  

**Tip:** This tag is not deprecated. However, it is possible to achieve richer effect by using CSS.  

**Attributes:**
- No atributes  

**Default CSS Settings:**  
```css
kbd {
  font-family: monospace;
}
```
<!--parrafo-->
<!--codepen-->
<iframe height="300" style="width: 100%;" scrolling="no" title="HTML &lt;kbd&gt; Tag" src="https://codepen.io/spjhon/embed/RwqNKqK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/spjhon/pen/RwqNKqK">
  HTML &lt;kbd&gt; Tag</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<!--codepen-->
<!--tooltiptext-->
Defines a snippet of user input.
<!--tooltiptext-->


<!--id-->
025
<!--id-->
<!--titulo-->
HTML <mark> Tag
<!--titulo-->
<!--parrafo-->
The `<mark>` HTML element represents text which is marked or highlighted for reference or notation purposes due to the marked passage's relevance in the enclosing context.  

**Tip:** Can be used with the mark tag  

**Attributes:**
- No atributes  

**Default CSS Settings:**  
```css
mark {
  background-color: yellow;
  color: black;
}
```
<!--parrafo-->
<!--codepen-->
<iframe height="300" style="width: 100%;" scrolling="no" title="HTML &lt;mark&gt; Tag" src="https://codepen.io/spjhon/embed/ZEmYezN?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/spjhon/pen/ZEmYezN">
  HTML &lt;mark&gt; Tag</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<!--codepen-->
<!--tooltiptext-->
Defines highlighted text.
<!--tooltiptext-->


<!--id-->
026
<!--id-->
<!--titulo-->
HTML <meter> Tag
<!--titulo-->
<!--parrafo-->
The `<meter>` tag defines a scalar measurement within a known range, or a fractional value. This is also known as a gauge.  

**Tip:** Always add the `<label>` tag for best accessibility practices!   

**Note:** The `<meter>` tag should not be used to indicate progress (as in a progress bar). For progress bars, use the `<progress>` tag.

**Attributes:**  

| Attribute | Value   | Description                                                  |
|-----------|---------|--------------------------------------------------------------|
| form      | form_id | Specifies which form the `<meter>` element belongs to        |
| high      | number  | Specifies the range that is considered to be a high value    |
| low       | number  | Specifies the range that is considered to be a low value     |
| max       | number  | Specifies the maximum value of the range                     |
| min       | number  | Specifies the minimum value of the range. Default value is 0 |
| optimum   | number  | Specifies what value is the optimal value for the gauge      |
| value     | number  | Required. Specifies the current value of the gauge           |  
  

**Default CSS Settings:**  
```css
None.
```
<!--parrafo-->
<!--codepen-->
<iframe height="300" style="width: 100%;" scrolling="no" title="HTML &lt;meter&gt; Tag" src="https://codepen.io/spjhon/embed/zYMxZyo?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/spjhon/pen/zYMxZyo">
  HTML &lt;meter&gt; Tag</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<!--codepen-->
<!--tooltiptext-->
Defines a scalar measurement within a known range (a gauge).
<!--tooltiptext-->


<!--id-->
027
<!--id-->
<!--titulo-->
HTML <pre> Tag
<!--titulo-->
<!--parrafo-->
The `<pre>` tag defines preformatted text.  
Text in a `<pre>` element is displayed in a fixed-width font, and the text preserves both spaces and line breaks. The text will be displayed exactly as written in the HTML source code. 

**Tip:** No tips  

**Attributes:**
- No atributes  

**Default CSS Settings:**  
```css
pre {
  display: block;
  font-family: monospace;
  white-space: pre;
  margin: 1em 0;
}
```
<!--parrafo-->
<!--codepen-->
<iframe height="300" style="width: 100%;" scrolling="no" title="HTML &lt;pre&gt; Tag" src="https://codepen.io/spjhon/embed/mdQyBLZ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/spjhon/pen/mdQyBLZ">
  HTML &lt;pre&gt; Tag</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<!--codepen-->
<!--tooltiptext-->
Defines preformatted text.
<!--tooltiptext-->


<!--id-->
028
<!--id-->
<!--titulo-->
HTML <progress> Tag
<!--titulo-->
<!--parrafo-->
The `<progress>` tag represents the completion progress of a task.  

**Tip:** Always add the `<label>` tag for best accessibility practices!.  
Use the `<progress>` tag in conjunction with JavaScript to display the progress of a task.  

**Note:** The `<progress>` tag is not suitable for representing a gauge (e.g. disk space usage or relevance of a query result). To represent a gauge, use the `<meter>` tag instead.

**Attributes:**  

| Attribute | Value  | Description                                                            |
|-----------|--------|------------------------------------------------------------------------|
| max       | number | Specifies how much work the task requires in total. Default value is 1 |
| value     | number | Specifies how much of the task has been completed                        

**Default CSS Settings:**  
```css
None.
```
<!--parrafo-->
<!--codepen-->
<iframe height="300" style="width: 100%;" scrolling="no" title="HTML &lt;progress&gt; Tag" src="https://codepen.io/spjhon/embed/NWEPaZb?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/spjhon/pen/NWEPaZb">
  HTML &lt;progress&gt; Tag</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<!--codepen-->
<!--tooltiptext-->
Represents the progress of a task
<!--tooltiptext-->


<!--id-->
029
<!--id-->
<!--titulo-->
HTML <q> Tag
<!--titulo-->
<!--parrafo-->
The `<q>` HTML element indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks. This element is intended for short quotations that don't require paragraph breaks; for long quotations use the `<blockquote>` element.  

**Tip:** No tip yet.  

**Note:** No notes yet.

**Attributes:**  

| Attribute | Value | Description                           |
|-----------|-------|---------------------------------------|
| cite      | URL   | Specifies the source URL of the quote |  

**Default CSS Settings:**  
```css
q {
  display: inline;
}

q:before {
  content: open-quote;
}

q:after {
  content: close-quote;
}
```
<!--parrafo-->
<!--codepen-->
<iframe height="300" style="width: 100%;" scrolling="no" title="HTML &lt;q&gt; Tag" src="https://codepen.io/spjhon/embed/BaGymBz?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/spjhon/pen/BaGymBz">
  HTML &lt;q&gt; Tag</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<!--codepen-->
<!--tooltiptext-->
Defines a short quotation
<!--tooltiptext-->


<!--id-->
030
<!--id-->
<!--titulo-->
HTML <rp> Tag
<!--titulo-->
<!--parrafo-->
The `<rp>` tag can be used to provide parentheses around a ruby text, to be shown by browsers that do not support ruby annotations.  

**Tip:** Use `<rp>` together with `<ruby>` and `<rt>`: The `<ruby>` element consists of one or more characters that needs an explanation/pronunciation, and an `<rt>` element that gives that information, and an optional `<rp>` element that defines what to show for browsers that not support ruby annotations.  

**Note:** No notes yet.

**Attributes:**  

No atributes 

**Default CSS Settings:**  
```css
None.
```
<!--parrafo-->
<!--codepen-->
<iframe height="300" style="width: 100%;" scrolling="no" title="HTML &lt;rp&gt; Tag" src="https://codepen.io/spjhon/embed/QWJwOwv?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/spjhon/pen/QWJwOwv">
  HTML &lt;rp&gt; Tag</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<!--codepen-->
<!--tooltiptext-->
Defines what to show in browsers that do not support ruby annotations,
<!--tooltiptext-->


<!--id-->
031
<!--id-->
<!--titulo-->
HTML <rt> Tag
<!--titulo-->
<!--parrafo-->
The `<rt>` tag defines an explanation or pronunciation of characters (for East Asian typography) in a ruby annotation.  

**Tip:** Use <rt> together with <ruby> and <rp>: The <ruby> element consists of one or more characters that needs an explanation/pronunciation, and an <rt> element that gives that information, and an optional <rp> element that defines what to show for browsers that not support ruby annotations.  

**Note:** No notes yet.

**Attributes:**  

No atributes 

**Default CSS Settings:**  
```css
rt {
  line-height: normal;
}
```
<!--parrafo-->
<!--codepen-->
<iframe height="300" style="width: 100%;" scrolling="no" title="HTML &lt;rp&gt; Tag" src="https://codepen.io/spjhon/embed/QWJwOwv?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/spjhon/pen/QWJwOwv">
  HTML &lt;rp&gt; Tag</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<!--codepen-->
<!--tooltiptext-->
Defines an explanation/pronunciation of characters (for East Asian typography).
<!--tooltiptext-->
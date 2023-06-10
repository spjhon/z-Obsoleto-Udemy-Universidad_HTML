<!--tituloSubtema-->
Forms and Inputs
<!--tituloSubtema-->

<!--description-->
Forms to submit and input from user
<!--description-->


<!--id-->
043
<!--id-->
<!--titulo-->
HTML <form> Tag
<!--titulo-->
<!--parrafo-->
The `<form>` tag is used to create an HTML form for user input.  

The `<form>` element can contain one or more of the following form elements:  
- `<input>`
- `<textarea>`
- `<button>`
- `<select>`
- `<option>`
- `<optgroup>`
- `<fieldset>`
- `<label>`
- `<output>`

**Tip:** No tips yet.  

**Note:** No notes yet

**Attributes:**  

| Attribute      | Value                                                                                                 | Description                                                                                             |
|----------------|-------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| accept-charset | character_set                                                                                         | Specifies the character encodings that are to be used for the form submission                           |
| action         | URL                                                                                                   | Specifies where to send the form-data when a form is submitted                                          |
| autocomplete   | on<br>off                                                                                             | Specifies whether a form should have autocomplete on or off                                             |
| enctype        | application/x-www-form-urlencoded<br>multipart/form-data<br>text/plain                                | Specifies how the form-data should be encoded when submitting it to the server (only for method="post") |
| method         | get<br>post                                                                                           | Specifies the HTTP method to use when sending form-data                                                 |
| name           | text                                                                                                  | Specifies the name of a form                                                                            |
| novalidate     | novalidate                                                                                            | Specifies that the form should not be validated when submitted                                          |
| rel            | external<br>help<br>license<br>next<br>nofollow<br>noopener<br>noreferrer<br>opener<br>prev<br>search | Specifies the relationship between a linked resource and the current document                           |
| target         | _blank<br>_self<br>_parent<br>_top                                                                    | Specifies where to display the response that is received after submittin                                |

**Default CSS Settings:**  
```css
None.
```
<!--parrafo-->
<!--codepen-->
<iframe height="300" style="width: 100%;" scrolling="no" title="HTML &lt;form&gt; Tag" src="https://codepen.io/spjhon/embed/LYXEoJJ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/spjhon/pen/LYXEoJJ">
  HTML &lt;form&gt; Tag</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<!--codepen-->
<!--tooltiptext-->
Defines an HTML form for user input
<!--tooltiptext-->


<!--id-->
044
<!--id-->
<!--titulo-->
HTML <input> Tag
<!--titulo-->
<!--parrafo-->
The `<input>` tag specifies an input field where the user can enter data.  
The `<input>` element is the most important form element.  
The `<input>` element can be displayed in several ways, depending on the type attribute.

The different input types are as follows:

- `<input type="button">` The `<input type="button">` defines a clickable button (mostly used with a JavaScript to activate a script).
- `<input type="checkbox">` Checkboxes are used to let a user select one or more options of a limited number of choices.
- `<input type="color">` The default value is `#000000` (black). The value must be in seven-character hexadecimal notation.
- `<input type="date">`
- `<input type="datetime-local">` The `<input type="datetime-local">` defines a date picker.
- `<input type="email">` The input value is automatically validated to ensure it is a properly formatted e-mail address.
- `<input type="file">` To define a file-select field that allows multiple files to be selected, add the multiple attribute.
- `<input type="hidden">` Do not use hidden inputs as a form of security!
- `<input type="image">` The path to the image is specified in the src attribute.
- `<input type="month">` The format is "YYYY-MM".
- `<input type="number">` Use the following attributes to specify restrictions:  
- max - specifies the maximum value allowed
- min - specifies the minimum value allowed
- step - specifies the legal number intervals
- value - Specifies the default value
- `<input type="password">` Any forms involving sensitive information like passwords should be served over HTTPS.
- `<input type="radio">` Radio buttons are normally presented in radio groups (a collection of radio buttons describing a set of related options). Only one radio button in a group can be selected at the same time.

**Note:** The radio group must have share the same name (the value of the name attribute) to be treated as a group. Once the radio group is created, selecting any radio button in that group automatically deselects any other selected radio button in the same group. You can have as many radio groups on a page as you want, as long as each group has its own name.

**Note:** The value attribute defines the unique value associated with each radio button. The value is not shown to the user, but is the value that is sent to the server on "submit" to identify which radio button that was selected.
- `<input type="range">` Default range is 0 to 100. However, you can set restrictions on what numbers are accepted with the attributes below.  
- max - specifies the maximum value allowed
- min - specifies the minimum value allowed
- step - specifies the legal number intervals
- value - Specifies the default value
- `<input type="reset">` Avoid reset buttons in your forms! It is frustrating for users if they click them by mistake.
- `<input type="search">` Remember to set a name for the search field, otherwise nothing will be submitted. The most common name for search inputs is q.
- `<input type="submit">` The form-handler is typically a server page with a script for processing the input data. The form-handler is specified in the form's action attribute.
- `<input type="tel">` Browsers that do not support "tel" fall back to being a standard "text" input.
- `<input type="text">` (default value) The default width of the text field is 20 characters.
- `<input type="time">` Always add the `<label>` tag for best accessibility practices!
- `<input type="url">` The input value is automatically validated before the form can be submitted.
- `<input type="week">` Defines a week and year control (no time zone).

**Tip:** Always use the `<label>` tag to define labels for `<input type="text">`, `<input type="checkbox">`, `<input type="radio">`, `<input type="file">`, and `<input type="password">`.

  

**Note:** No notes yet.

**Attributes:**  

| Attribute      | Value                                                                                                                                                                                                         | Description                                                                                                                       |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| accept         | file_extension<br>audio/*<br>video/*<br>image/*<br>media_type                                                                                                                                                 | Specifies a filter for what file types the user can pick from the file input dialog box (only for type="file")                    |
| alt            | text                                                                                                                                                                                                          | Specifies an alternate text for images (only for type="image")                                                                    |
| autocomplete   | on<br>off                                                                                                                                                                                                     | Specifies whether an `<input>` element should have autocomplete enabled                                                             |
| autofocus      | autofocus                                                                                                                                                                                                     | Specifies that an `<input>` element should automatically get focus when the page loads                                              |
| checked        | checked                                                                                                                                                                                                       | Specifies that an `<input>` element should be pre-selected when the page loads (for type="checkbox" or type="radio")                |
| dirname        | inputname.dir                                                                                                                                                                                                 | Specifies that the text direction will be submitted                                                                               |
| disabled       | disabled                                                                                                                                                                                                      | Specifies that an `<input>` element should be disabled                                                                              |
| form           | form_id                                                                                                                                                                                                       | Specifies the form the `<input>` element belongs to                                                                                 |
| formaction     | URL                                                                                                                                                                                                           | Specifies the URL of the file that will process the input control when the form is submitted (for type="submit" and type="image") |
| formenctype    | `application/x-www-form-urlencoded<br>multipart/form-data<br>text/plain        `                                                                                                                                | Specifies how the form-data should be encoded when submitting it to the server (for type="submit" and type="image")               |
| formmethod     | get<br>post                                                                                                                                                                                                   | Defines the HTTP method for sending data to the action URL (for type="submit" and type="image")                                   |
| formnovalidate | formnovalidate                                                                                                                                                                                                | Defines that form elements should not be validated when submitted                                                                 |
| formtarget     | _blank<br>_self<br>_parent<br>_top<br>framename                                                                                                                                                               | Specifies where to display the response that is received after submitting the form (for type="submit" and type="image")           |
| height         | pixels                                                                                                                                                                                                        | Specifies the height of an `<input>` element (only for type="image")                                                                |
| list           | datalist_id                                                                                                                                                                                                   | Refers to a `<datalist>` element that contains pre-defined options for an `<input>` element                                           |
| max            | number<br>date                                                                                                                                                                                                | Specifies the maximum value for an `<input>` element                                                                                |
| maxlength      | number                                                                                                                                                                                                        | Specifies the maximum number of characters allowed in an `<input>` element                                                          |
| min            | number<br>date                                                                                                                                                                                                | Specifies a minimum value for an `<input>` element                                                                                  |
| minlength      | number                                                                                                                                                                                                        | Specifies the minimum number of characters required in an `<input>` element                                                         |
| multiple       | multiple                                                                                                                                                                                                      | Specifies that a user can enter more than one value in an `<input>` element                                                         |
| name           | text                                                                                                                                                                                                          | Specifies the name of an `<input>` element                                                                                          |
| pattern        | regexp                                                                                                                                                                                                        | Specifies a regular expression that an `<input>` element's value is checked against                                                 |
| placeholder    | text                                                                                                                                                                                                          | Specifies a short hint that describes the expected value of an `<input>` element                                                    |
| readonly       | readonly                                                                                                                                                                                                      | Specifies that an input field is read-only                                                                                        |
| required       | required                                                                                                                                                                                                      | Specifies that an input field must be filled out before submitting the form                                                       |
| size           | number                                                                                                                                                                                                        | Specifies the width, in characters, of an `<input>` element                                                                         |
| src            | URL                                                                                                                                                                                                           | Specifies the URL of the image to use as a submit button (only for type="image")                                                  |
| step           | number<br>any                                                                                                                                                                                                 | Specifies the interval between legal numbers in an input field                                                                    |
| type           | button<br>checkbox<br>color<br>date<br>datetime-local<br>email<br>file<br>hidden<br>image<br>month<br>number<br>password<br>radio<br>range<br>reset<br>search<br>submit<br>tel<br>text<br>time<br>url<br>week | Specifies the type `<input>` element to display                                                                                     |
| value          | text                                                                                                                                                                                                          | Specifies the value of an `<input>` element                                                                                         |
| width          | pixels                                                                                                                                                                                                        | Specifies the width of an `<input>` element (only for type="image")                                                                 | 

**Default CSS Settings:**  
```css
None.
```
<!--parrafo-->
<!--codepen-->
<iframe height="600" style="width: 100%;" scrolling="no" title="HTML &lt;input&gt; Tag" src="https://codepen.io/spjhon/embed/dyQPBbr?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/spjhon/pen/dyQPBbr">
  HTML &lt;input&gt; Tag</a> by Juan Camilo (<a href="https://codepen.io/spjhon">@spjhon</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<!--codepen-->
<!--tooltiptext-->
Defines a possible line-break
<!--tooltiptext-->
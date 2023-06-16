**DOM Document Object Model**

- La estructura más externa del entorno del navegador es la ventana o window, que representa una instancia de la ventana del navegador en la que se carga la página web.

- Dentro de la ventana (window) se encuentra el objeto document, que representa el documento HTML actualmente cargado en la ventana. El objeto document proporciona métodos y propiedades para acceder y manipular los elementos y el contenido del documento.

- Dentro del documento (document), la raíz es el elemento <html>, que contiene todos los demás elementos de la página.

- Los elementos HTML, como <div>, <p>, <img>, etc., son nodos hijos del elemento <html> y pueden contener otros elementos anidados.

el root es un selector CSS que tiene mas espcividad que el HTML, sin embargo representan lo mismo.

La comunicación entre el DOM y el navegador se realiza a través de APIs (Interfaces de Programación de Aplicaciones). Estas APIs proporcionan métodos y eventos que permiten interactuar con el DOM y realizar diversas operaciones, como manipular elementos, cambiar estilos, agregar o eliminar contenido, entre otros.

- La diferencia entre NODE y ELEMENT es que los node son mas cosas dentro del arbol del DOM (buscar imagen adjunta) como los comentarios y el texto y muchas mas cosas, los elementos son solo la coleccion de tags. In simple words, an element is a node that's written using a tag in the HTML document.

- Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.

- Estos elementos HTML heredan propiedades y funciones de sus padres que en el caso de los nodosHTML seria 

- GRACIAS AL DOM SE PUEDE MANIPULAR ELEMENTOS HTML:

Desde el elemento general (cuando se crea con un getelementbyid por ejemplo) se crea un OBJETO y se puede aplicar:
Las propiedades del HTML element que estan en w3 schoools
Las propiedades de attr que estan en w3schools para accesara y modificar atributos
Las propiedades de collection que estan en w3schhools se aplican a lo que retorna ciertos queries que retornan arrays
    The getElementsByTagName() Method
    The getElementsByClassName() Method
    The children Property
Las propiedades de style que estan en w3schools para poder modificar los estilos desde javascript
Las propiedades de nodelist son aquellas que se aplican a lo que retorna
    The childNodes() Method
    The querySelectorAll() Method
    The getElementsByName() Method
Las propiedades de HTMLtokenList que es basicamete todo lo que se puede hacer con classList, manipulacion de classes.

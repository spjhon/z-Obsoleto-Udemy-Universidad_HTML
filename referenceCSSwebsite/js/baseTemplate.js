function navbar () {
    const wrapper = document.getElementById("navbar");
    wrapper.innerHTML += `
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="./index.html">
            <img src="../img/logo.jpg" alt="Logo" width="40" height="40" class="d-inline-block align-text-top">
            CSS REFERENCE DOCUMENT
            </a>
        </div>
    </nav>`
  }
  
  function sidebar () {
    const wrapper = document.getElementById("sidebar");
    wrapper.innerHTML += `
    <div class="list-group">
      <a href="../pages/basicSelectors.html" class="list-group-item list-group-item-action list-group-item-dark">Selectors And Specifity</a>
      <a href="../pages/pseudo-clases.html" class="list-group-item list-group-item-action list-group-item-dark">Pseudo-Clases</a>
      <a href="../pages/pseudo-elements.html" class="list-group-item list-group-item-action list-group-item-dark">Pseudo-Elements</a>
    </div>`
  }
  
  navbar();
  sidebar();





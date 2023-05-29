Vue.component('header-component', {
    template: `
    <header class="header-component">
      <div class="logo-container">
        <img class="logo-image" src="../images/logo.png" alt="Logo">
      </div>
      <h1 class="title">Tienda Virtual</h1>
    </header>
  `
});

Vue.component('menu-component', {
    template: `
    <nav class="menu-component">
      <div class="menu-bar">
        <ul>
          <li><a href="#">Crear</a></li>
          <li><a href="#">Ver Contenido</a></li>
          <li><a href="#">Borrar Contenido</a></li>
          <li><a href="#">Editar Contenido</a></li>
        </ul>
      </div>
    </nav>
  `
});

Vue.component('form-component', {
    template: `
    <form>
      <div class="form-group">
        <label for="documento">Documento:</label>
        <input type="text" id="documento" name="documento">
      </div>
      <div class="form-group">
        <label for="nombre-producto">Nombre del producto:</label>
        <input type="text" id="nombre-producto" name="nombre-producto">
      </div>
      <div class="form-group">
        <label for="total">Total:</label>
        <input type="text" id="total" name="total">
      </div>
      <div class="form-group">
        <label for="direccion">Dirección:</label>
        <input type="text" id="direccion" name="direccion">
      </div>
      <div class="button-group">
        <div class="button-container">
          <button type="button" id="crear">Crear</button>
        </div>
        <div class="button-container">
          <button type="button" id="limpiar">Limpiar</button>
        </div>
      </div>
    </form>
  `
});

Vue.component('footer-component', {
    template: `
    <footer class="footer-component">
      <p>&copy; 2023 Tienda Virtual. Todos los derechos reservados.</p>
    </footer>
  `
});

new Vue({
    el: '#app'
});

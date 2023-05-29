Vue.component('header-component', {
    template: `
    <header class="header-component">
        <div class="logo-container">
            <img class="logo-image" src="images/logo.png" alt="Logo">
        </div>
        <h1 class="title">Tienda Virtual</h1>
    </header>
    `
});

Vue.component('form-component', {
    template: `
    <form>
        <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username">
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password">
        </div>
        <div class="button-group">
            <div class="button-container">
                <button type="button" id="login">Login</button>
            </div>
            <div class="button-container">
                <button type="button" id="google-login">Sign in with Google</button>
            </div>
        </div>
    </form>
    `
});

Vue.component('footer-component', {
    template: `
    <footer>
        <p>&copy; 2023 Tienda Virtual. Todos los derechos reservados.</p>
    </footer>
    `
});

new Vue({
    el: '#app'
});

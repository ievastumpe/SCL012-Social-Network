import { login } from '/lib/index.js';
//import { templateHome } from '/lib/home.js';

export const templateLogin = () => {
    window.location.hash = '#login'
    const containerLogin = document.createElement('div');
    const contentLogin = `<p> Login en tu Cuenta </p>
        <form>
        <input type="email" id="emailLogin" placeholder="Ingresa tu email" class="input" required>
        <input type="password" id="passwordLogin" placeholder="Ingresa tu contraseña" class="input" required>
        <button id="btnLogin" class="btn">Acceder</button>
        </form>`;
    containerLogin.innerHTML = contentLogin;
    document.getElementById("content").innerHTML = contentLogin;

    const emailLogin = containerLogin.querySelector('#emailLogin').value;
    const passwordLogin = containerLogin.querySelector('#passwordLogin').value;

    const btnLogin = containerLogin.querySelector('#btnLogin');

    btnLogin.addEventListener('click', () => {
      const container = document.getElementById('content');
      container.innerHTML='';
      login(emailLogin, passwordLogin);
      })
};
import { ingreso } from './index.js';
import { templateHome } from './home.js';

export const templateLogin = () => {
    console.log("holaaaaa")
    window.location.hash = '#login'
    const containerCreate = document.createElement('div');
    const contentCreate = `<p> Login en tu Cuenta </p>
        <form>
        <input type="email" id="emailLogin" placeholder="Ingresa tu email" class="input" required>
        <input type="password" id="passwordLogin" placeholder="Ingresa tu contraseña" class="input" required>
        <button id="enterLogin" class="btn">Acceder</button>
        </form>`;
    containerCreate.innerHTML = contentCreate;
    document.getElementById("content").innerHTML = contentCreate;

    const emailLogin = containerCreate.querySelector('#emailLogin').value;
    const passwordLogin = containerCreate.querySelector('#passwordLogin').value;

    const enterLogin = containerCreate.querySelector('#enterLogin');

    enterLogin.addEventListener('click', () => {
      const container = document.getElementById('content');
      container.innerHTML='';
      ingreso(emailLogin, passwordLogin);
      templateHome();
      window.location.hash = '#home';
    })
};
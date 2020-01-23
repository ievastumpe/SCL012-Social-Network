import { login } from './index.js';

export const templateLogin = () => {
    console.log("holaaaaa")
    window.location.hash = '#/login'
    const containerCreate = document.createElement('div');
    const contentCreate = `<p> Login en tu Cuenta </p>
        <form>
        <input type="email" name="" id="emailLogin" placeholder="Ingresa tu email" class="input" required>
        <input type="password" name="" id="passwordLogin" placeholder="Ingresa tu contraseña" class="input" required>
        <button id="enterLogin" class="btn">Acceder</button>
        </form>`;
    containerCreate.innerHTML = contentCreate;
    document.getElementById("content").innerHTML = contentCreate;

    const enterLogin = containerCreate.querySelector('#enterLogin');
    enterLogin.addEventListener('click', () => {
        console.log("boton funciona");
        e.preventDefault();
        login(emailLogin, passwordLogin);
        return containerCreate;
    });
}
    
window.addEventListener("load", showLogin());
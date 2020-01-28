import { login } from './index.js';
import { templateHome } from './home.js';
import { templateRegister } from './register.js';

export const templateLogin = () => {
    console.log("holaaaaa")
    window.location.hash = '#login'
    const containerCreate = document.createElement('div');
    containerCreate.setAttribute('class', 'loginStyle');
    const contentCreate = `
    <header>
    <div class="logo">
    <img class="apiLogoStyle" src="img/fontApoderapi.png" alt="apoderapiLogo">
    </div>
    </header>
    <div class="register-box">
    <main>
    <h3 class="titleForm">Ingresa a tu cuenta</h3>
    <form>
    <input class="inputForm" type="email" id="emailLogin" placeholder="Ingresa tu email" class="input" required>
    <input class="inputForm" type="password" id="passwordLogin" placeholder="Ingresa tu contraseña" class="input" required>
    <button class="btnFormStyle" id="enterLogin" class="btn">Acceder</button><br>
    <a class="forgottenP" id="forgottenPass" href="#">¿Olvidaste tu contraseña?</a>
    </form>
    </div>
    <p>¿No tienes una cuenta?</p>
    <button class="btnFormStyle" id="toRegister">Regístrate acá</button><br>
    </main>`;
    containerCreate.innerHTML = contentCreate;
    document.getElementById("content").innerHTML = contentCreate;

    const emailLogin = containerCreate.querySelector('#emailLogin').value;
    const passwordLogin = containerCreate.querySelector('#passwordLogin').value;
    const goToRegister = containerCreate.querySelector('#toRegister').value;
    const enterLogin = containerCreate.querySelector('#enterLogin');

    goToRegister.addEventListener('click', () => {
      const container = document.getElementById('content');
      container.innerHTML='';
        window.location.hash = '#register';
      console.log("boton vuelta a signUp funciona");
    })

    enterLogin.addEventListener('click', () => {
      const container = document.getElementById('content');
      container.innerHTML='';
      login(emailLogin, passwordLogin);
      templateHome();
      window.location.hash = '#home';
    })
};
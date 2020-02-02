import { login } from './index.js';
import { templateRegister } from './register.js';

export const templateLogin = () => {
    console.log('holaaa Login')
    window.location.hash = '#login'
    const containerLogin = document.createElement('div');
    containerLogin.setAttribute('class', 'loginStyle');
    const contentLogin = `
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
    <a id="toRegister" href="#register">Regístrate acá</a><br>
    </main>`;
    containerLogin.innerHTML = contentLogin;
    document.getElementById("content").innerHTML = contentLogin;


   const toRegister = containerLogin.querySelector('#toRegister').value;
   const container = document.getElementById('content');

   toRegister.addEventListener('click', () => {
      container.innerHTML = '';
      templateRegister();
      window.location.hash = '#register';
      console.log("boton to register funciona");
      });

    const enterLogin = containerLogin.querySelector('#enterLogin');

    enterLogin.addEventListener('click', () => {
      console.log('button enterLogin working');
      login(emailLogin, passwordLogin);
      const emailLogin = containerLogin.querySelector('#emailLogin').value;
      const passwordLogin = containerLogin.querySelector('#passwordLogin').value;
      window.location.hash = '#home';
    });
};
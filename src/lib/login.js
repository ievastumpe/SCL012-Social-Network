import { login } from './index.js';

export const templateLogin = (cb) => {
  console.log("holaaaaa")
  window.location.hash = '#login';
  const containerCreate = document.createElement('div');
  containerCreate.setAttribute('class', 'loginStyle');

  const contentCreate = `
  <header>
  <div class="logo">
  <img class="apiLogoStyle" src="img/apoderapiFlat.png" alt="apoderapiLogo">
  <img class="apiNameStyle" src="img/logosinfondo.png" alt="apoderapiLogo">
  </div>
  </header>
    <main class="mainStyle">
    <div class="login-box">
    <h3 class="titleForm">Ingresa a tu cuenta</h3>
    <input class="inputForm" type="email" id="emailLogin" placeholder="Ingresa tu email" required>
    <input class="inputForm" type="password" id="passwordLogin" placeholder="Ingresa tu contraseña" required>
    <a class="forgottenP" id="forgottenPass" href="#">¿Olvidaste tu contraseña?</a><br>
    <button id="enterLogin" class="btnFormStyle">Acceder</button>
    <br>
    </div>
    <div class="linksStyle">
    <p>¿No tienes una cuenta?</p>
    <a id="toRegister" href="#register">Regístrate acá</a><br>
    </div>
    </main>
    `;
  containerCreate.innerHTML = contentCreate;

  setTimeout(() => {
    // document.getElementById("content").innerHTML = contentCreate;
    const enterLogin = containerCreate.querySelector('#enterLogin');
    const goToRegister = containerCreate.querySelector('#toRegister');

    // Iniciar sesión de usuario ya registrado
    enterLogin.addEventListener('click', () => {
      console.log('click');
      const emailLogin = containerCreate.querySelector('#emailLogin').value;
      console.log(emailLogin);
      const passwordLogin = containerCreate.querySelector('#passwordLogin').value;
      console.log(passwordLogin);
      const container = document.getElementById('content');
      container.innerHTML = '';
      login(emailLogin, passwordLogin);
      window.location.hash = '#home';

    });

    // Ir a página de registro
    goToRegister.addEventListener('click', () => {
      console.log('boton vuelta a signUp funciona');
      const container = document.getElementById('content');
      container.innerHTML = '';
      window.location.hash = '#register';
    });

    cb(containerCreate);
  }, 0);
};

import { register } from './index.js';
import { googleRegistro } from './index.js';
import { templateLogin } from './login.js';
import { templateHome } from './home.js';
export const templateRegister = () => {
  console.log('register');
  window.location.hash = '#register';
  // creamos div que contendrá la plantilla
  const containerRegister = document.createElement('div');
  containerRegister.setAttribute('class', 'registerStyle');
  // creamos el contenido del login
  const contentRegister = `
  <header>
  <div class="logo">
  <img class="apiLogoStyle" src="img/apoderapiFlat.png" alt="apoderapiLogo">
  <img class="apiNameStyle" src="img/logosinfondo.png" alt="apoderapiLogo">
  </div>
  </header>
  <main class="mainStyle">
  <div class="register-box">
  <h3 class="titleForm">Crea tu cuenta</h3>
  <div class="inputDiv">
  <input class="inputForm" id="emailSave" type="email" placeholder="Ingresa tu mail" required><br>
  <input class="inputForm" id="passwordSave" type="password" placeholder="Ingresa una contraseña" required><br>
  </div>
  <button class="btnFormStyle" id="signUp">Registrarse</button><br>
  </div>
  <div class="linksStyle">
  <p>Regístrate con tu cuenta Google</p>
  <img class="google-Btn" id="signUpGoogle" src="img/btn_google_signin_light_pressed_web@2x.png" alt="logoGoogle">
  <p>¿Ya tienes una cuenta?</p>
  <a id="loginHere" href="#login">Ingresa acá</a><br>
  </div>
  </main>
  `;
  // pasar el contenido al div
  containerRegister.innerHTML = contentRegister;

  // le pido que busque el id del boton del input dentro del div creado
  const btnSignUp = containerRegister.querySelector('#signUp');
  const btnGoogle = containerRegister.querySelector('#signUpGoogle');
  const linkLogin = containerRegister.querySelector('#loginHere');
  //const btnForum = containerRegister.querySelector('#toForum');
  // const btnHome = containerRegister.querySelector('#toHome');

  // evento del botón que llama a la función registrar
  btnSignUp.addEventListener('click', () => {
    const email = containerRegister.querySelector('#emailSave').value;
    console.log(email);
    const password = containerRegister.querySelector('#passwordSave').value;
    console.log(password);
    register(email, password);
    // verificar()
    console.log('boton reg funciona');
  });

  btnGoogle.addEventListener('click', () => {
    googleRegistro();
    console.log('boton google funciona');
  });

  linkLogin.addEventListener('click', () => {
    const container = document.getElementById('content');
    container.innerHTML = '';
    window.location.hash = '#login';
    console.log('boton hacia login funciona');
  });

  // btnForum.addEventListener('click', () => {
  //   const container = document.getElementById('content');
  //   container.innerHTML = '';
  //   templateForum();
  //   window.location.hash = '#forum';
  //   console.log("boton hacia forum funciona");
  //   });

  // btnHome.addEventListener('click', () => {
  //   const container = document.getElementById('content');
  //   container.innerHTML = '';
  //   templateHome();
  //   window.location.hash = '#home';
  //   console.log('boton hacia home funciona');
  // });

  return containerRegister;
}
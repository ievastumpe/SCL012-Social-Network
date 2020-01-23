import { registrar } from './index.js';
import { googleRegistro } from './index.js';
// import { templateLogin } from './login.js';

export const templateRegister = (cb) => {
  console.log('register')
  window.location.hash = '#/register'
  // creamos div que contendrá la plantilla
  const containerRegister = document.createElement('div');
  // creamos el contenido del login
  const contentRegister = `
  <header>
  <div class="frontLogo">
      <h2>NombreApp</h2>
      <p>La comunidad de apoderados más grande de Chile</p>
  </div>
</header>
<main>
  <div>
  <h4>Crea tu cuenta</h4>
  <input id="emailSave" type="email" id="email" placeholder="Ingresa tu mail" required="required">
  <input id="passwordSave" type="password" id="password" placeholder="Ingresa una contraseña" required="required"><br>
  <input id="olderSave" type="checkbox" required="required">Confirmo que soy mayor de edad<br>
  <button id="signUp">Crear cuenta</button><br>
  <p>Registrate con tu cuenta Google</p>
  <button id="signUpGoogle">Acceder</button>
  <p>¿Ya tienes una cuenta?</p>
  <a><span id="loginHere">Ingresa acá</span></a>
</main>
`
  // pasar el contenido al div
  containerRegister.innerHTML = contentRegister;

  setTimeout(() => {
    // le pido que busque el id del boton y class del input dentro del div creado
    const emailSave = containerRegister.querySelector('#emailSave').value;
    console.log(emailSave);
    const passwordSave = containerRegister.querySelector('#passwordSave').value;
    console.log(passwordSave);
    const btnSignUp = containerRegister.querySelector('#signUp');
    const btnGoogle = containerRegister.querySelector('#signUpGoogle');
    const linkLogin = containerRegister.querySelector('#loginHere');

    // evento del botón que llama a la función registrar
    btnSignUp.addEventListener('click', () => {
      registrar(emailSave, passwordSave);
      console.log("boton funciona");
    })

    btnGoogle.addEventListener('click', () => {
      googleRegistro();
      console.log("boton google funciona");
    })

    linkLogin.addEventListener('click', () => {
      const container = document.getElementById('content');
      container.innerHTML='';
        templateLogin();
        window.location.hash = '#login';
      console.log("boton login funciona");
    })


    cb(containerRegister);
  }, 0);
}
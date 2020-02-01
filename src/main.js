
import { templateRegister } from './lib/register.js';
import { observador } from './lib/index.js';
import { templateLogin } from './lib/login.js';
import { templateHome } from './lib/home.js';


window.onhashchange = () => {
  routerHash(window.location.hash);
}

console.log('windowsHash working')

// Inicializar Firebase
const init = () => {
          firebase.initializeApp({
          apiKey: "AIzaSyA866dHzLXbsfmKkNn69rj4ZrVxCLnfEb0",
          authDomain: "red-social-lab20.firebaseapp.com",
          databaseURL: "https://red-social-lab20.firebaseio.com",
          projectId: "red-social-lab20",
          storageBucket: "red-social-lab20.appspot.com",
          messagingSenderId: "871920292627",
          appId: "1:871920292627:web:8f2ebda74348e502a400e6"
        });
        // Initialize Firebase
        console.log('hash register working')
        window.location.hash = "#/register";
        observador();
        console.log('observador working');
  }
  
init();


// Carga el template del hash correspondiente
const routerHash = (hash) => {
  if(hash === ''){ //hash por defecto muestra home
    return templateOn('#/home');
  } 
  else if (hash === '#/home') {
    return templateOn(hash);
  } 
  else if (hash === '#/register') {
    return templateRegister(hash);
  } 
  else if (hash === '#/login') {
    return templateLogin(hash);
  } else if (hash === '#/forum') {
    return templateForum(hash);
  //} else if (hash === '#/profile') {
    //return templateProfile(hash);
  }
};

// const goBack = () => {
//   window.history.back();
//   console.log("going one page back")
// }

// goBack();

// const goForward = () => {
//   window.history.forward();
//   console.log("going one page forward")
// }


// Imprimir template del hash correspondiente en el div del html
export const templateOn = (hash) => {
  const router = hash.substring(2); //pide que lea desde el 2do caracter, se salta el #/
  const container = document.getElementById('content');
  container.innerHTML = ''; //vaciar contenedor para prender el div
// Coincidir hash con template 
 // Coincidir hash con template 
// Coincidir hash con template 
switch (router) {
case 'home':
  container.appendChild(templateHome());
break;
case 'register':
  container.appendChild(templateRegister());
break;
case 'login':
  container.appendChild(templateLogin());
break;
// case 'login'/'feedcolegios'/'colegioProfile'/'userProfile'/'forum'
//   containerRoot.appendChild(templateLogIn());
// break;

default:
  container.innerHTML = `<h3>P[agina no encontrada</hr>`
}

};

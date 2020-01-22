// Este es el punto de entrada de tu aplicacion

import { templateRegister } from './lib/register.js';
import { observador } from './lib/index.js';

// Funcion observador que detecta si hay sesión iniciada

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
        templateRegister();
        observador();
        initChange();
        console.log('holi')
  }
window.addEventListener('load', init);


  // const config = {
  //   apiKey: "AIzaSyA866dHzLXbsfmKkNn69rj4ZrVxCLnfEb0",
  //   authDomain: "red-social-lab20.firebaseapp.com",
  //   databaseURL: "https://red-social-lab20.firebaseio.com",
  //   projectId: "red-social-lab20",
  //   storageBucket: "red-social-lab20.appspot.com",
  //   messagingSenderId: "871920292627",
  //   appId: "1:871920292627:web:8f2ebda74348e502a400e6"
  // }
  // firebase.initializeApp(config)




//Carga el template del hash correspondiente
const routerHash = (hash) => {
  if(hash === ''){ //hash por defecto muestra home
    return templateOn('#/home');
  }
  if (hash === '#/home') {
    return templateOn(hash);
  }
  if (hash === '#/register') {
    return templateOn(hash);
    
  }
}

// Imprimir template del hash correspondiente en el div del html
export const templateOn = (hash) => {
    const router = hash.substring(2); //pide que lea desde el 2do caracter, se salta el #/
    const container = document.getElementById('contenido');
    container.innerHTML = ''; //vaciar contenedor para prender el div
 // Coincidir hash con template 
 switch (router) {
  case 'home':
    container.appendChild(templateHome());
  break;
  case 'register':
    templateRegister(
      (retContainer) => 
        container.appendChild(retContainer)
        )
  break;
  case 'login':
    container.appendChild(templateLogin());
  break;
  // case 'login'/'feedcolegios'/'colegioProfile'/'userProfile'/'forum'
  //   containerRoot.appendChild(templateLogIn());
  // break;
 
  default:
    container.innerHTML = `<h3>Página no encontrada</h3>`
  }
}

//Iniciar cambio de hash
const initChange = () => {
  window.addEventListener('load', routerHash(window.location.hash));
  // reconoce un cambio en el hash y le pasa ese nuevo hash a routerHash
  if ('onhashchange' in window) {
    window.onhashchange = () => {
      routerHash(window.location.hash);
    }
  }
  
}
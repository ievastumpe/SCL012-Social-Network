
import { templateRegister } from './lib/register.js';
import { observador } from './lib/index.js';
import { templateLogin } from './lib/login.js';
import { templateHome } from './lib/home.js';
import { templateForum } from './lib/forum2.js';
import  {colegios} from './colegios.js';
console.log(colegios);

window.onhashchange = () => {
  routerHash(window.location.hash);
};

console.log('windowsHash working')

// Inicializar Firebase
const init = () => {
  firebase.initializeApp({
  apiKey: "AIzaSyBkaiafAwTseLjyCpFhhCb6IDsKlzvf2Mg",
  authDomain: "apoderapi2.firebaseapp.com",
  databaseURL: "https://apoderapi2.firebaseio.com",
  projectId: "apoderapi2",
  storageBucket: "apoderapi2.appspot.com",
  messagingSenderId: "903864325494",
  appId: "1:903864325494:web:b1c21b8717c64b435e9657"
  });
// Initialize Firebase
  console.log('hash register working')
  window.location.hash = "#register";
  observador();
  console.log('observador working');
}
init();

// Imprimir template del hash correspondiente en el div del html
export const templateOn = (hash) => {
  const router = hash.substring(1); // pide que lea desde el 2do caracter, se salta el #/
  const container = document.getElementById('content');
  container.innerHTML = ''; // vaciar contenedor para prender el div
  // Coincidir hash con template
  switch (router) {
    case 'home':
      container.appendChild(templateHome());
      break;
    case 'register':
      container.appendChild(templateRegister());
      break;
    case 'login':
      templateLogin((printContainer) => container.appendChild(printContainer));
      break;
    case 'forum':
      container.appendChild(templateForum());
      console.log('hello forum');
      break;
    default:
      container.innerHTML = '`<h3> Página no encontrada </h3>`';
  }
};

// Carga el template del hash correspondiente
const routerHash = (hash) => {
  if (hash === '') { // hash por defecto muestra home
    return templateOn('#home');
  }
  if (hash === '#home') {
    return templateOn(hash);
  }
  if (hash === '#register') {
    return templateOn(hash);
  }
  if (hash === '#login') {
    return templateOn(hash);
  }
  else if (hash === '#forum') {
  console.log('forum hash working');
  return templateOn('#forum');
  }
};

observador();



// const goBack = () => {
//   window.history.back();
//   console.log("going one page back")
// }

// goBack();

// const goForward = () => {
//   window.history.forward();
//   console.log("going one page forward")
// }
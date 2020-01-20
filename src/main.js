// Este es el punto de entrada de tu aplicacion

import { registrar } from './lib/index.js';
import { ingreso } from './lib/index.js';
import { aparece } from './lib/index.js';
import { observador } from './lib/index.js';
import { cerrar } from './lib/index.js';

// Registro de usuario

document.getElementById('login').addEventListener('click', registrar);

// Ingreso de usuario

document.getElementById('login2').addEventListener('click', ingreso);

// Implementar observador para verificar si el usuario está activo en la página

observador();

// Cerrar sesión

// document.getElementById('logOut').addEventListener('click', cerrar);

// myFunction();

// Usuario con sesión activa

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//   } else {
//     // No user is signed in.
//   }
// });
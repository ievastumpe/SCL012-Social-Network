// Este es el punto de entrada de tu aplicacion

import { registrar } from './lib/index.js';
import { ingreso } from './lib/index.js';
import { observador } from './lib/index.js';
import { cerrar } from './lib/index.js';   
import colegios from './colegios.js';
import{selectionComunas} from './app.js';
console.log(colegios)






























//averiguar sobre window addevent listener

// Registro de usuario

document.getElementById('login').addEventListener('click', registrar);

// Ingreso de usuario

document.getElementById('loginIngreso').addEventListener('click', ingreso);

// Funcion observador que detecta si hay sesión iniciada

observador();

// function aparece(){
//     const contenido = document.getElementById("contenido");
//     contenido.innerHTML = `
//     <p>Bienvenido!</p>
//     <button onclick="cerrar()">Cerrar Sesión</button>
//     `;
// }
//Api//

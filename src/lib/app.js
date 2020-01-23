//Acá cargamos los contenidos de la página

import { initFirebase } from './index.js';
import { observador } from './index.js';
import { initChange } from './index.js';

export const firebaseOn = () => {
    initFirebase();
    observador();
    initChange();
}
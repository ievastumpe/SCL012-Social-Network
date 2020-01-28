import { ingreso } from './index.js';
import { templateHome } from './home.js';

export const templateLogin = () => {
    console.log("holaaaaa")
    window.location.hash = '#login'
    const loginBtn = document.createElement('button');
    loginBtn.innerText = 'Ingresar';

    loginBtn.addEventListener('click', () => {
        ingreso();
      })

    const loginContainer = 

};
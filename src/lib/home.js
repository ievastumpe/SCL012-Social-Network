import { logOut } from "./index.js";
import { templateRegister } from "./register.js";

export const templateHome = () => {
  window.location.hash = '#/home';
    const containerHome = document.createElement('div');
    const contentHome =
    `<header>
    <div>
        <a href="#/home">NombreApp</a>
        <button class="logOutnav" id="logOut">Cerrar Sesión</button>
    </div>
     </header>
     <hr>
    <main>
    <div></div>
            <div id="selectSchool">
            <select name="schools" id="stgoSchools">Busca tu colegio</select>

                <div>  
        </main>
        <footer>
        <a id="" class="icono">Hola</a>
        </footer>  
    
        
        `;
        containerHome.innerHTML = contentHome;
        document.getElementById('logOut').addEventListener('click', () => {
          const container = document.getElementById('content');
          container.innerHTML='';
          logOut();
          templateRegister();
      })
    }
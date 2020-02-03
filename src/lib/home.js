// import { logOut } from "../main.js";

export const templateHome = () => {
  window.location.hash = '#home';
  const containerHome = document.createElement('div');
  containerHome.setAttribute('class', 'homeStyle');
  const contentHome = `<header>
    <div class="align mobile-bar">
    <div class="headMobile">
    <img class="apiMobileStyle" src="img/fontApoderapi.png" alt="apoderapiLogo">
    </div>
    <nav class="navigation navigation--inline">
    <ul>
    <li><a href="#"><img class="icons-style" src="img/menu.png" alt="menu-icon"></a></li>
    <li><a class="active" href="#home"><img id="toHome" class="icons-style" src="img/home.png" alt="home-icon"></a></li>
    <li><a href="#profile"><img class="icons-style" src="img/user.png" alt="user-icon"></a></li>
    <li><a href="#favorites"><img class="icons-style" src="img/like.png" alt="user-icon"></a></li>
    <li><a href="#forum"><img class="icons-style" src="img/megaphone.png" alt="forum-icon"></a></li>
    <li><a href="#logout"><img id="logOut" class="icons-style" src="img/exit.png" id="toLogout" alt="logout-icon"></a></li>
    </ul>
    </nav>
    </div>
    <div class="align up-bar">
    <nav class="navigation navigation--inline">
    <ul>
    <img class="logoStyle" src="img/apoderapiWhite.png" alt="apoderapiWhite">
    <li><a class="active" href="#home"><img id="toHome" class="icons-style" src="img/home.png" alt="home-icon">Home</a></li>
    <li><a href="#profile"><img class="icons-style" src="img/user.png" alt="user-icon">Perfil</a></li>
    <li><a href="#favorites"><img class="icons-style" src="img/like.png" alt="user-icon">Colegios Favoritos</a></li>
    <li><a href="#forum"><img class="icons-style" src="img/megaphone.png" alt="forum-icon">Foros</a></li>
    <li><a href="#logout"><img id="logOut" class="icons-style" src="img/exit.png" id="toLogout" alt="logout-icon">Salir</a></li>
    </ul>
    </nav>  
    </div>
     </header>
    <main class="stgoView">
    <div id="selectSchool">
    <div class="selectStyle"> 
    <a>¿Dónde quieres buscar colegio?</a>
    <select name="" id="">
    <option id="">Buscar Comuna</option>
    <option id="conchali">Conchali</option>
    <option id="elbosque">El Bosque</option>
    <option id="estacioncentral">Estacion Central</option>
    <option id="ñuñoa">Ñuñoa</option>
    <option id="maipu">Maipu</option>
    <option id="puentealto">Puente Alto</option>
    <option id="santiago">Santiago</option>
    <option id="providencia">Providencia</option>
    <option id="vitacura">Vitacura</option>
    <option id="sanramon">San Ramon</option>
    <option id="sanjoaquin">San Joaquin</option>
    <option id="sanmiguel">San Miguel</option>
    <option id="renca">Renca</option>
    <option id="recoleta">Recoleta</option>
    <option id="quintanormal">Quinta Normal</option>
    <option id="quilicura">Quilicura</option>
    <option id="pudahuel">Pudahuel</option>
    <option id="peñalolen ">Peñalolen</option>
    <option id="pac">Pedro Aguirre Cerda</option>
    <option id="macul">Macul</option>
    <option id="loprado">Lo Prado</option>
    <option id="loespejo">Lo Espejo</option>
    <option id="cerrillos">Cerrillos</option>
    <option id="cerronavia">Cerro Navia</option>
    <option id="huechuraba">Huechuraba</option>
    <option id="independencia">Independencia</option>
    <option id="laCisterna">La Cisterna</option>
    <option id="laFlorida">La Florida</option>
    <option id="laPintana">La Pintana</option>
    <option id="laGranja">La Granja</option>
    <option id="laReina">La Reina</option>
    <option id="las Condes">Las Condes</option>
    <option id="loBarnechea">Lo Barnechea</option>
    </select>
    </div> 
    </div>  
    </main>`;
  containerHome.innerHTML = contentHome;
  document.getElementById('content').innerHTML = contentHome;

  const goToHome = containerHome.querySelector('#toHome');
  // const goToLogout = containerHome.querySelector('#toLogout');

  goToHome.addEventListener('click', () => {
    googleRegistro();
    console.log('boton google funciona');
  })
};

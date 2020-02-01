export const templateHome = () => {
  window.location.hash = '#home';
const containerHome = document.createElement('div');
const contentHome =
`<header>
<div>
<img class="apiLogoStyle" src="img/fontApoderapi.png" alt="apoderapiLogo">
</div>
<div class="nav">
<ul>
<li><a href="#"><img src="img/menu.png" alt="menu-icon"></a></li>
<li><a class="active" href="#home"><img id="toHome" src="img/home.png" alt="home-icon"></a></li>
<li><a href="#profile"><img src="img/user.png" alt="user-icon"></a></li>
<li><a href="#favorites"><img src="img/like.png" alt="user-icon"></a></li>
<li><a href="#forum"><img src="img/megaphone.png" alt="forum-icon"></a></li>
<li><a href="#logout"><img id="logOut" src="img/exit.png" id="toLogout" alt="logout-icon"></a></li>
</ul>
</div>
</header>
<main class="stgoView">
<div id="selectSchool">
<p>¿Dónde quieres buscar colegio?</p>
<select name="" id="">
<option value="">Buscar Comuna</option>
<option value="cerrilos">Cerrillos</option>
<option value="cerroNavia">Cerro Navia</option>
<option value="conchali">Conchalí</option>
<option value="elBosque">El Bosque</option>
<option value="estacionCentral">Estación Central</option>
<option value="huechuraba">Huechuraba</option>
<option value="independencia">Independencia</option>
<option value="laCisterna">La Cisterna</option>
<option value="laFlorida">La Florida</option>
<option value="laPintana">La Pintana</option>
<option value="laGranja">La Granja</option>
<option value="laReina">La Reina</option>
<option value="las Condes">Las Condes</option>
<option value="loBarnechea">Lo Barnechea</option>
</select>
</div>  
</main>
<footer>
<h4>Todos los derechos reservados</h4>
</footer>`;
containerHome.innerHTML = contentHome;
document.getElementById("content").innerHTML = contentHome;

const goToHome = containerHome.querySelector('#toHome');
const goToLogout = containerHome.querySelector('#toLogout');

goToHome.addEventListener('click', () => {
googleRegistro();
console.log("boton google funciona");
})
};
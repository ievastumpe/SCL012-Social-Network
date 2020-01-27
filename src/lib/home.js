
    export const templateHome = () => {
        window.location.hash = '#home';
    const containerHome = document.createElement('div');
    const contentHome =
    `<header>
    <div><a href="#/home">NombreApp</a>
        <button class="logOutnav" id="logOut">Cerrar Sesión</button>
    </div>
     </header>
    <main>
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
    <div>  
    </main>
    <footer>
    <h4>Todos los derechos reservados</h4>
    </footer>`;
    containerHome.innerHTML = contentHome;
    document.getElementById("content").innerHTML = contentHome;
        // document.getElementById('logOut').addEventListener('click', () => {
        //   const container = document.getElementById('content');
        //   container.innerHTML='';
        //   logOut();
        //   templateRegister();
      // })
    }

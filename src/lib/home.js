//import { Scolegios } from './filter.js';
//const dataFiltrado = Scolegios();
import colegios from '../colegios.js';


export const templateHome = () => {
    //stringComuna= "";
    //let content2 = document.getElementById("content");
    //content2.innerHTML +=" ";
    window.location.hash = '#home';
    const containerHome = document.createElement('div');

    let contentOtro = 
    `<div>
                        <main class="stgoView">
                         <div id="selectSchool">
                          <p>¿Dónde quieres buscar colegio?</p>
                           <select name="" id="selectComuna">
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
                                  </main>
                                     <footer>
                                       <h4>Todos los derechos reservados</h4>
                                         </footer>`;
    //con la funcion onchange hace el evento 
    document.getElementById("content").innerHTML = contentOtro;
    let dropDownMenu = document.getElementById("content").querySelector("#selectComuna");
    dropDownMenu.onchange = () => funcionComunas(dropDownMenu);
    //return funcionComunas
    return containerHome;

    
};


const sComunas = (stringComuna) => {

    let selectionComunas = colegios.filter(seLec => seLec.Comuna.includes(stringComuna));
    console.log("filtra?", selectionComunas)
    return selectionComunas;
}
const seLection = (sComunas) => { 
    
    for (let i = 0; i < sComunas.length; i++) {
        let content2 = document.getElementById("content");
        content2.innerHTML += `<div class= "businessCard">
                                     <div class="img">
                                      <img src=${sComunas[i].image} </img>
                                           <p> ${sComunas[i].puntuación}</p>
                                         </div>
                                         <div class="contentStyle">
                                         <h3>Colegio: ${sComunas[i].name}
                                         <li> ${sComunas[i].Comuna}</li>
                                         <li> ${sComunas[i].Telefono}</li>
                                         <li> ${sComunas[i].Email}</li>
                                         <li> ${sComunas[i].web}</li>
                                           </div>
                                             
                                                    <p> ${sComunas[i].Reseña}</p>
                                                       
                                                         </div>`;
                                  

    }
    console.log(seLection);

}
//guardamos el valor del select y lo imprime en la consola y la juntamos con el filter
const funcionComunas = (dropDownMenu) => {
    let stringComuna = dropDownMenu.options[dropDownMenu.selectedIndex].text;
    console.log("siiiiii", stringComuna)
    //revisar la funcion seLection con el innerHTML2
    seLection(sComunas(stringComuna));
    console.log("hola", stringComuna);
    //stringComuna= "";
};
  const repitComuna = () => {
      funcionComunas(stringComuna)
      return repitComuna
  }

    // export const Scolegios 





        // document.getElementById('logOut').addEventListener('click', () => {
        //   const container = document.getElementById('content');
        //   container.innerHTML='';
        //   logOut();
        //   templateRegister();
      // })
    //}
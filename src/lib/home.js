export const templateHome = () => {
  windows.location.hash = '#/home';
    // creamos div que contendrá la plantilla
    const containerHome = document.createElement('div');
    // creamos el contenido del login
    const contentHome = `
    <header>
    <div class="frontLogo">
        <a href="#"><img src="" alt="nameApp" class="logo"></a>
        <h2>NombreApp</h2>
        <p>La comunidad de apoderados más grande de Chile</p>
    </div>
  </header>
  <main>
    <div>
    <p>¡Hola Mundo!</p>


    </div>
  </main>
  `
    // pasar el contenido al div
    containerHome.innerHTML = contentHome;
  
    // le pido que busque el id del boton dentro del div creado
    const inputSave = containerHome.querySelector('#inputSave').value;
    console.log(inputSave);
    const btn = containerHome.querySelector('#signUp');
  
    // evento del botón que llama a la autentificación de google.
    btn.addEventListener('click', () => {
        registrar();
      console.log("boton funciona");
    return containerHome;
  })
  
  }
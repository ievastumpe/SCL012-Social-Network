// aqui exportaras las funciones que necesites

export const registrar = () => {
  const email = document.getElementById('email').value;
  console.log(email);
  const password = document.getElementById('password').value;
  console.log(password);

// Autentificar utilizando Firebase
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  const errorCode = error.code;
  console.log(errorCode);
  const errorMessage = error.message;
  console.log(errorMessage);
  // ...
})

};

export const ingreso = () => {
  const email2 = document.getElementById('email2').value;
  console.log(email2);
  const password2 = document.getElementById('password2').value;
  console.log(password2); 

  firebase.auth().signInWithEmailAndPassword(email2, password2).catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code;
    console.log(errorCode);
    const errorMessage = error.message;
    console.log(errorMessage);
    // ...
  });
  
};

export const cerrar = () => {
  firebase.auth().signOut()
  .then(function(){
      console.log('Saliendo...')

  })
  .catch(function(error){
      console.log(error)

  })
};

export const aparece = () => {

  document.getElementById('logOut').addEventListener('click', cerrar);

  const contenido = document.getElementById('content');
  contenido.innerHTML = `
  <p>Bienvenido</p>
  <button id="logOut">Cerrar Sesión</button>
  
  `
};

export const observador = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('existe usuario activo')
      // En caso de que el usuario esté activo
      aparece()
      // User is signed in.
      const displayName = user.displayName;
      const email = user.email;
      console.log(user);
      const emailVerified = user.emailVerified;
      const photoURL = user.photoURL;
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
      const providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log('no existe usuario activo')
      // ...
    }
  })
};

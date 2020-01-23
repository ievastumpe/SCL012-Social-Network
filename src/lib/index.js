// aqui exportaras las funciones que necesites

//Funcion registrar nuevo usuario
export const registrar = (email, contrasena) => {
  firebase.auth().createUserWithEmailAndPassword(email, contrasena)
  .then(function(){
      verificar()
  })    
  .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
  })
};

export const login = () => {
    // const emailLogin = document.getElementById("emailLogin").value;
    // const passwordLogin = document.getElementById("passwordLogin").value;
  
    firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
        .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    })
  };

// Registrarse con Google
export const googleRegistro = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
}

// Registrarse con Facebook
export const facebookRegistro = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider);
}

// Función ingresar usuario ya registrado
export const ingreso = () => {
  firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
      .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
  })
};

// Funcion observador para ver si hay cuenta activa

export const observador = () => {
      firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
      console.log("existe usuario activo")

        const displayName = user.displayName;
        const email = user.email;
        const emailVerified = user.emailVerified;
        const photoURL = user.photoURL;
        const isAnonymous = user.isAnonymous;
        const uid = user.uid;
        const providerData = user.providerData;
        
        if (emailVerified === true) {
            console.log("sesión on");
            templateHome();
        } else {
      console.log("no existe usuario activo")
        }
    }
   })
}


// Función cerrar sesión

export const logOut = () => {
    firebase.auth().signOut()
    .then(function(){
        console.log("loging out...")
    })
    .catch(function(error){
        console.log(error)
    })
}

//Función para mandar email a usuario y verificar cuenta

export const verificar = () => {
    const user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
        console.log("sending email...");
    }).catch(function(error) {
        console.log(error);
    })
}

//Iniciar cambio de hash

// export const initChange= () => {
//     window.addEventListener('load', changeRouter(window.location.hash));
//     // reconoce un cambio en el hash y le pasa ese nuevo hash a changeRouter
//     if ('onhashchange' in window) {
//       window.onhashchange = () => {
//         changeRouter(window.location.hash);
//       }
//     }
    
//   }
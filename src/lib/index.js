// aqui exportaras las funciones que necesites
import { templateHome } from './home.js';
// Enviar correo de verificacion de cuenta 
  const verify = () => {
    const user = firebase.auth().currentUser;
  
    user.sendEmailVerification()
      .then(() => {
        // Email sent.
        console.log('Enviando correo...');
        alert('Hemos enviado un correo de verificación de cuenta');
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };


//Funcion registrar nuevo usuario
export const register = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(){
      verify()
  })    
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
    templateHome();
}

// Registrarse con Facebook
export const facebookRegistro = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider);
};

// Función ingresar usuario ya registrado
export const login = () => {
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
      firebase.auth().onAuthStateChanged((user) => {
      if (user) {
      console.log("existe usuario activo")

        const displayName = user.displayName;
        console.log(user);
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
      console.log("usuario no verificado")
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

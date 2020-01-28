import {afterLogIn} from /lib/register.js;

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
<<<<<<< HEAD
export const register = () => {
    firebase.auth().createUserWithEmailAndPassword(emailSave, passwordSave).
    catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
});
};

export const verificar = () => {
    const user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
        console.log("sending email...");
    }).catch(function(error) {
        console.log(error);
    })
};


export const login = () => {
    firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
        .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        window.location.hash = '#home';
    })
=======
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

>>>>>>> 0eafd34e0c44fb0081a35ce9594faa0ea36704c5
};

// Registrarse con Google
export const googleRegistro = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
<<<<<<< HEAD
};
=======
    templateHome();
}
>>>>>>> 0eafd34e0c44fb0081a35ce9594faa0ea36704c5

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
<<<<<<< HEAD
        templateRegister();
        console.log("no existe usuario activo")
=======
      console.log("usuario no verificado")
>>>>>>> 0eafd34e0c44fb0081a35ce9594faa0ea36704c5
        }
    }
   })
};

observador();

// Función cerrar sesión

export const logOut = () => {
    firebase.auth().signOut()
    .then(function(){
        console.log("loging out...")
    })
    .catch(function(error){
        console.log(error)
    })
<<<<<<< HEAD
};

=======
}
>>>>>>> 0eafd34e0c44fb0081a35ce9594faa0ea36704c5

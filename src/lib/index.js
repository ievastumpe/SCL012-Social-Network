// aqui exportaras las funciones que necesites

export const registrar = () => {
  const email = document.getElementById("email").value;
  const contrasena = document.getElementById("contrasena").value;

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
  });
}

export const  ingreso = () => {
  const emailIngreso = document.getElementById("emailIngreso").value;
  const contrasenaIngreso = document.getElementById("contrasenaIngreso").value;

  firebase.auth().signInWithEmailAndPassword(emailIngreso, contrasenaIngreso)
      .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
  });
}

export const observador = () => {
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
      console.log("existe usuario activo")
    //   aparece()
        const displayName = user.displayName;
        const email = user.email;
        
        console.log('***********');
        console.log(user.emailVerified);
        console.log('**********');

        const emailVerified = user.emailVerified;
        const photoURL = user.photoURL;
        const isAnonymous = user.isAnonymous;
        const uid = user.uid;
        const providerData = user.providerData;
        // ...
      } else {
      console.log("no existe usuario activo")
      }
  });
}
observador();


export const cerrar = () => {
    firebase.auth().signOut()
    .then(function(){
        console.log("saliendo...")
    })
    .catch(function(error){
        console.log(error)
    })
}

export const verificar = () => {
    const user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
        console.log("enviando email...");
    }).catch(function(error) {
        console.log(error);
    })
}
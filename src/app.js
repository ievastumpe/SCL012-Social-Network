function registrar(){
    const email = document.getElementById("email").value;
    const contrasena = document.getElementById("contrasena").value;

    firebase.auth().createUserWithEmailAndPassword(email, contrasena)
        .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    });
}

function ingreso(){
    const email2 = document.getElementById("email2").value;
    const contrasena2 = document.getElementById("contrasena2").value;

    firebase.auth().signInWithEmailAndPassword(email2, contrasena2)
        .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    });
}

function observador(){
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
          // ...
        } else {
        console.log("no existe usuario activo")
        }
    });
}
observador();

  
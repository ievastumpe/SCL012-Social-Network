// aqui exportaras las funciones que necesites

export const register = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("contrasena").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
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

export const login = () => {
  const emailLogin = document.getElementById("emailLogin").value;
  const passwordLogin = document.getElementById("passwordLogin").value;

  firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
      .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
  });
}

export const observe = () => {
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
      console.log("user doesnt exist")
      }
  });
}
observe();


export const close = () => {
    firebase.auth().signOut()
    .then(function(){
        console.log("loging out...")
    })
    .catch(function(error){
        console.log(error)
    })
}

export const verificate = () => {
    const user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
        console.log("sending email...");
    }).catch(function(error) {
        console.log(error);
    })
}

// export const templateForum = (cb) => {
//   console.log('holaaa Forum');
//   window.location.hash = '#forum';
//   const containerForum = document.createElement('div');
//   containerForum.setAttribute('class', 'content');
//   const contentForum = `
//     <header>
//     <div class="logo">
//     <img class="apiLogoStyle" src="img/fontApoderapi.png" alt="apoderapiLogo">
//     </div>
//     </header>
  
//     <div class="register-box">
//     <main>
//     <h1 class="titleForm">Forum</h1>
//     <form>
//     <p>Escribe tu post aqui</p>
//     <input class="inputForm" type="textfield" id="postedText" placeholder="Escribe tu texto" class="input" required>
//     <button class="btnPostStyle" id="addPost" class="btn">Agregar Post</button><br>
//     <p id="outputField">Your posted message:</p>
//     </form>
//     </main>
//     </div>`;
 
//   document.getElementById("content").innerHTML = contentForum;

//   setTimeout(() => {
//     const firestore = firebase.firestore();
//     const btnAddPost = containerForum.querySelector('#addPost');
//     const outputField = containerForum.querySelector('#outputField');
//     const inputTextField = containerForum.querySelector('#postedText');
//     const docRef = firestore.doc('samples/postdata');
  
//   //------------------Saving written text in the post------------------
//   btnAddPost.addEventListener('click', () => {
//     console.log('agregar post');
//       const textToSave = inputTextField.value;
//     console.log('I am going to save' + texToSave + 'to Firestore');
//       outputField (textToSave);
//       docRef.set({
//       writtenPost: textToSave
//       }).then(function() {
//         console.log('status saved');
//       }).catch(function (error){
//         console.log('get an error: ', error);
//     });
//   });
  
//   cb(containerForum)
//   }, 0);
// };

// /*
//   const sendPost = (textPost) => {
//     const texToSave = textPost;
//     console.log(`I am going to save ${texToSave} to Firestore`);
//     database.collection('post').get().then((querySnapshot) => {
//         pulishedPost.innerHTML = '';
//         querySnapshot.forEach((doc) => {
//           console.log(`${doc.id} => ${doc.data()}`);
//         pulishedPost.innerHTML += `
//             <div>
//             <div class="message"> ${doc.data().POST}</div>
//             <td> <button class="btnClear"></button>Editar</button>
//             <td> <button class="btnClear"></button>Eliminar</button>
//             </div>
//             `;
//       });
//     })
//     .catch((error) => {
//       console.error('Error adding document: ', error);
//     });
//   };
// */
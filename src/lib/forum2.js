
export const templateForum = () => {
    console.log('holaaa Forum');
    window.location.hash = '#forum';

    //------------------ intro texto para forum -------------//
    contentPost.innerHTML = '';
    contentPost.innerHTML += `
    <header>
    <div class="logo">
     <img class="apiLogoStyle" src="img/fontApoderapi.png" alt="apoderapiLogo">
    </div>
    </header>
    
    <div class="forum-box">
    <main>
    <h1 class="titleForm">Forum</h1>
    <form>
    <p>Escribe tu post aqui</p>
    `;

    //------------------ input area para forum -------------//
    const input = document.createElement('input');
    input.type = 'text';
    contentPost.appendChild(input);

    //------------------ button para agregar el post en el forum -------------//
    const saveButton = document.createElement('button');
    saveButton.innerHTML = 'Save Post';
    saveButton.addEventListener('click', () => {
    const textToSave = input.value;
    console.log(textToSave);
    savePost(textToSave);
    sendPost(textToSave);
    });
    contentPost.appendChild(saveButton);

    const database = firebase.firestore();
    //const docRef = firestore.doc('samples/posts');

//------------------ saving post to database -------------//
    const savePost = (textPost) => {
        const texToSave = textPost;
        console.log(`I am going to save ${texToSave} to Firestore`);
        database.collection('post').add({
        POST: texToSave,
        })
        .then((docRef) => {
            console.log('Status Saved!');
            console.log('Document written with ID: ', docRef.id);
        })
        .catch((error) => {
            console.error('Error adding document: ', error);
        });
    };
  
    //------------------ print post in the screan below input area -------------//
    const contentMessage = document.getElementById('contentMessage');
  
    const sendPost = (textPost) => {
        const texToSave = textPost;
        console.log(`I am going to save ${texToSave} to Firestore`);
        database.collection('post')
        .onSnapshot((querySnapshot) => {
        contentMessage.innerHTML = '';
        querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
        contentMessage.innerHTML += `
            <div>
            <div class="message"> ${doc.data().POST}</div>
            </div>
            `;
        });
        })
        .catch((error) => {
        console.error('Error adding document: ', error);
        });
    };
}

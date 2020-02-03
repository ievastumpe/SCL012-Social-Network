
export const templateForum = () => {
    console.log('holaaa Forum');
    window.location.hash = '#forum';

//------------------ intro texto para forum -------------//
// content.innerHTML = '';
// content.innerHTML += `
    
    const containerForum = document.createElement('div');
    containerForum.setAttribute('class', 'homeStyle');
    // creamos el contenido del login
    const contentForum = `
    <header>
    <div class="align mobile-bar">
    <div class="headMobile">
    <img class="apiMobileStyle" src="img/fontApoderapi.png" alt="apoderapiLogo">
    </div>
    <nav class="navigation navigation--inline">
    <ul>
    <li><a href="#"><img class="icons-style" src="img/menu.png" alt="menu-icon"></a></li>
    <li><a class="active" href="#home"><img id="toHome" class="icons-style" src="img/home.png" alt="home-icon"></a></li>
    <li><a href="#profile"><img class="icons-style" src="img/user.png" alt="user-icon"></a></li>
    <li><a href="#favorites"><img class="icons-style" src="img/like.png" alt="user-icon"></a></li>
    <li><a href="#forum"><img class="icons-style" src="img/megaphone.png" alt="forum-icon"></a></li>
    <li><a href="#logout"><img id="logOut" class="icons-style" src="img/exit.png" id="toLogout" alt="logout-icon"></a></li>
    </ul>
    </nav>
    </div>
    <div class="align up-bar">
    <nav class="navigation navigation--inline">
    <ul>
    <img class="logoStyle" src="img/apoderapiWhite.png" alt="apoderapiWhite">
    <li><a class="active" href="#home"><img id="toHome" class="icons-style" src="img/home.png" alt="home-icon">Home</a></li>
    <li><a href="#profile"><img class="icons-style" src="img/user.png" alt="user-icon">Perfil</a></li>
    <li><a href="#favorites"><img class="icons-style" src="img/like.png" alt="user-icon">Colegios Favoritos</a></li>
    <li><a href="#forum"><img class="icons-style" src="img/megaphone.png" alt="forum-icon">Foros</a></li>
    <li><a href="#logout"><img id="logOut" class="icons-style" src="img/exit.png" id="toLogout" alt="logout-icon">Salir</a></li>
    </ul>
    </nav>  
    </div>
    </header>
    
    <div class="forum-box">
    <main>
    <h1 class="titleForm">Forum</h1>
    <form>
    <div='post message' type=text>Escribe tu post aqui</div>
    `;

    containerForum.innerHTML = contentForum;

    //------------------ input area para forum -------------//
    const input = document.createElement('input');
    input.type = 'text';
    containerForum.appendChild(input);

    //------------------ button para agregar el post en el forum -------------//
    const saveButton = document.createElement('button');
    saveButton.innerHTML = 'Save Post';
    saveButton.addEventListener('click', () => {
    const textToSave = input.value;
    console.log(textToSave);
    savePost(textToSave);
    sendPost(textToSave);
    });
    containerForum.appendChild(saveButton);

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
    //const contentMessage = document.getElementById('content');
  
    const sendPost = (textPost) => {
        const texToSave = textPost;
        console.log(`I am going to save ${texToSave} to Firestore`);
        database.collection('post')
        .onSnapshot((querySnapshot) => {
        //content.innerHTML = '';
        querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
        containerForum.innerHTML += `
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

    return containerForum;
}




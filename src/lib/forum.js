const database = firebase.firestore();
const contentForum = document.getElementById('content'); 

const createPost = () => {
    window.location.hash = '#forum';
    const input = document.createElement('input');
    input.type = 'text';
    contentForum.appendChild(input);
    const btnSave = document.createElement('button');
    btnSave.innerHTML = 'Save Post';
    btnSave.addEventListener('click', () => {
      const textToSave = input.value;
      console.log(textToSave);
      savePost(textToSave);
      sendPost(textToSave);
    });
    contentForum.appendChild(btnSave);
  };
  
  const savePost = (textPost) => {
    const texToSave = textPost;
    console.log(`saving ${texToSave} to Firestore database`);
    database.collection('post').add({
      post: texToSave,
    })
      .then((docRef) => {
        console.log('Status Saved!');
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };
  
  
  const contentMessage = document.getElementById('content');
  
  const sendPost = (textPost) => {
    const texToSave = textPost;
    console.log(`saving ${texToSave} to Firestore database`);
    database.collection('post')
      .onSnapshot((querySnapshot) => {
        contentMessage.innerHTML = '';
        querySnapshot.forEach((doc) => {
          console.log(doc.id, ' => ', doc.data());
          contentMessage.innerHTML += `
              <div>
              <div class="message"> ${doc.data().post}</div>
              <td> <button class="btnClear"></button>Editar</button>
              <td> <button class="btnClear"></button>Eliminar</button>
              </div>
              `;
        });
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };
![Logo](src/img/apiReadme.png)

# Apoderapi

- Apoderapi es la red social de la comunidad de apoderados que te permite conocer la realidad de los colegios en Chile a partir de la opinión de otros apoderados. ¿Quieres saber qué colegios de tu comuna son inclusivos? ¿Te preguntas si cumplen con las horas de inglés que dice el programa? ¿No sabes si el colegio tendrá rampas de acceso de silla de ruedas? ¿Necesitas saber qué colegio cuenta con afterschool? Pregúntale a Apoderapi.

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Desarrollo del Producto](#2-desarrollo-del-producto)
* [3. Historias de Usuario](#3-historias-de-usuario)
* [4. Pruebas de Usuario](#4-pruebas-de-usuario)
* [5. Conclusiones](#6-conclusiones)
* [6. Desarrolladoras](#7-desarrolladoras)

***

## 1. Preámbulo

Como lluvia de ideas, decidimos implementar una sección en nuestro [Trello](https://trello.com/c/ge6MyBcS/30-firebase) donde pudiésemos escribir las posibles ideas de proyecto. Debido a que 2 de nuestras integrantes son madres, nos llamó la atención el hecho de que actualmente no existe un lugar o una app donde se pueda buscar colegio para sus hijxs, y que es una preocupación constante el hecho de no saber si un colegio es realmente lo que dice ser o lo que promete en el programa. Finalmente, nos decidimos por la idea de una red social donde los apoderados pudieran consultar colegios en base a valoraciones y experiencias de otros apoderados, para tener un espectro completo de la realidad de cada establecimiento.

Consideramos que lo importante es que sea una página amigable, fácil de usar y donde el usuario pueda encontrar un lugar seguro donde plantear y resolver sus inquietudes. El nombre *Apoderapi* surge por este sentido de red social amigable, y estableceremos un ambiente de familiaridad con otras app al tomar inspiraciones de las redes sociales más utilizadas hoy en día.

## 2. Desarrollo del Producto

### 2.1 Modelos de redes sociales

Al momento de decidir el aspecto y navegabilidad de nuestro producto, decidimos investigar las redes sociales ya existentes, para ver dónde ubicar los elementos de nuestra aplicación y poder entregar una mejor experiencia de usuario. 

- [Booking](https://www.booking.com): Como nuestra aplicación contempla mostrar información de cada colegio, decidimos inspirarnos en Booking para poder ordenar esos datos de mejor manera, específicamente por medio de un selector que despliegue tarjetas con la data de cada establecimiento.

- [Instagram](https://www.instagram.com) y [Facebook](https://www.facebook.com): Debido a que nuestro objetivo es que el usuario pueda postear y dar like, decidimos tomar inspiración del modelo de estas populares redes sociales para ubicar los iconos, post, like y barra de navegación. De facebook e instagram sacamos el modelo de dejar el post al principio de los comentarios, así como mostrar el perfil en ícono aparte en la barra de navegación.

### 2.1 Prototipo de baja y alta fidelidad

- Balsamiq:

Para nuestro modelo de baja fidelidad decidimos utilizar Balsamiq, a modo de poner en orden las ideas de despliegue de elementos que sacamos de las redes sociales. 

Ver [prototipo en Balsamiq acá](https://www.instagram.com)

Para poder evaluar nuestro prototipo, decidimos hacerlo modo mockup para que el usuario pudiese entender mejor el tema de nuestro proyecto, y poder preguntarle sobre de qué se imagina que trata la app y qué espera encontrar, ya sea en temas de información, filtros, imagenes, colores, etc. Para esto, trabajamos sobre el mismo balsamiq y le integramos las funcionalidades completas.

- Figma:

Una vez que decidimos dónde colocar cada elemento de la página, decidimos trabajar en Figma para poder integrar los colores y diseños definitivos de nuestro proyecto.

Ver [prototipo en Figma acá](https://www.figma.com/file/whqau5OZkXySUtYe1dJye9/Red-Social-(Copy)?node-id=13%3A0)

Nos basamos en el color cyan para entregar un ambiente formal y tranquilo, y en un color naranja para darle un toque alegre, propio de una red social. anto la paleta de colores como el diseño fueron cambiando a partir de las iteraciones con usuarios.


## 3. Historias de Usuario

### 3.1 Definiendo al usuario


1. ¿Quiénes son los principales usuarios de producto?

- Nuestros usuarios son nativos digitales, mayores de edad, principalmente entre los 20 - 40 años, preferentemente que sean apoderados o tutores y que la búsqueda de buscar colegio sea una verdadera inquietud.

2. ¿Cuáles son los objetivos de estos usuarios en relación con el producto?

- Nuestros usuarios desean conocer la realidad de un colegio a través de datos oficiales de cada institución (los cuales serán entregados en la app) y también a través de la valoración que le otorgan otros apoderados, para poder tener un espectro completo para decidir qué colegio es más conveniente para sus hijos.

3. ¿Cuándo utilizan o utilizarían el producto?

- La aplicación se utilizaría al momento de buscar colegios, tanto en apoderados primerizos (primera vez que buscan colegio), como en apoderados que deseen cambiar de colegio a sus hijos.

4. ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?

- Primero, decidimos que sería bueno contar con información establecida para cada colegio, obteniendo datos a partir de fuentes oficiales (ministerio y páginas de cada colegio). Además, consideramos importante darle espacio a los apoderados para poder comentar y dar información de cada establecimiento basada en su propia experiencia como usuario. Al momento de decidir cómo distribuir esta información y mostrarla, decidimos hacer una encuesta para los filtros que se verían en la página, para saber qué es lo que el usuario considera como prioridad al momento de hacer la búsqueda.

Ir a [Encuesta](https://docs.google.com/forms/d/e/1FAIpQLSd4nN9OQhzNYriZ3udogzukPxwGttbBo6627O6oiX_5qDU1Ug/viewform)

Es importante considerar que, para mostrar datos oficiales de cada colegio, teníamos la intención de trabajar con la Api del Ministerio de Educación, pero no pudimos utilizarla ya que se encuentra defectuosa. Esto nos llevó a comenzar a crear nuestra propia base de datos a partir de información disponible en la página oficial de cada colegio. 

Considerando que crear una base de datos requiere bastante tiempo, decidimos implementar sólo las comunas de Santiago y reducir nuestra muestra a 1 colegio por comuna. 

### 3.2 Definiendo las Historias de Usuario

Al momento de recopilar información, tanto de las encuestas como de preguntas a otros usuarios y de informarnos sobre el tema, nos dimos cuenta que la problemática es bastante amplia y que el usuario tiene muchas inquietudes que desea resolver. Al respecto, decidimos organizar nuestro tiempo utilizando Trello, y comenzamos a dar vida a nuestras historias de usuario.

Ir a [Trello Red Social](https://trello.com/c/ge6MyBcS/30-firebase)

Considerando los objetivos del proyecto, y equilibrándolos con los objetivos específicos de nuestra aplicación, creamos nuestras primeras H.U:

1. *"Yo, madre de 1 hija, quiero poder loguearme con mi contraseña y mail a través del celular, para poder acceder de forma segura a la red social"*

2. *"Yo, padre de 2 hijos, quiero poder postear en la aplicación para poder preguntar y comentar sobre colegios."*

3. *"Yo, apoderada primeriza, quiero poder ver los colegios junto con su información, para poder conocer más sobre los colegios"*

### Criterios de Aceptación

1. Para primera H.U.

- Debemos incluir una página de registro, para usuarios nuevos, y otra que sea de login para usuarios con cuenta. Debemos utilizar Firebase para implementar las funciones de authentication, sendEmail, createNewUser, observador(onAuthStateChanged).

- Implementar hoja de estilos CSS con tags y ID definidos, utilizar display:flex para que la app sea responsive y funcione en pantalla mobile y desktop.

2. Para segunda H.U.

- Poder guardar datos en Firestore (posts) utilizando la función onSnapshot(). Habilitar página de Foro para implementar los posts.

3. Para Tercera H.U.

- Conectarse con alguna Api o crear una en un .json. Utilizar import/export para implementarla en el HOME, donde irá un select por comuna. 

- Desplegar los resultados en tarjetas utilizando CSS, y luego desplegar otra página de Perfil de Colegio donde los apoderados puedan postear. Ubicar ícono en la barra de navegación superior.

### Definición de terminado

Aparte de las definiciones de terminado para cada H.U, se debe cumplir lo siguiente:

- Ser una SPA.
- Ser responsive.
- Haber recibido code review de al menos una compañera de otro equipo.
- Utilizar Eslint
- Testear manualmente buscando errores e imperfecciones simples.
- Hacer pruebas de usabilidad e incorporar el feedback de los usuarios como mejoras.
- Desplegar la aplicación.

### Consideraciones técnicas UX

- Tener al menos 2 entrevistas con usuarios.
- Hacer un prototipo de baja fidelidad.
- Asegurarse de que la implementación en código siga los lineamientos del diseño.
- Hacer sesiones de testing de usabilidad con el producto en HTML.

## 4. Pruebas de Usuario

Utilizando el prototipo de balsamiq, decidimos hacer los testeos con usuarios reales que cumplieran con las especificaciones de nuestro grupo target.

### Video de Testeo 1 

https://www.loom.com/share/5c6e624991184aeaab30148b84f9ec28

### Video de Testeo 2

https://www.loom.com/share/f8e68c5a4cfb47b5bcedf80cfc02abd3

### Video de Testeo 3

https://www.loom.com/share/a1dd84b53cdb4e16960cd1d8c2a598f9

### Feedback de Test de Usabilidad

Los aspectos más comentados fueron:

- La mayoría de los comentarios fueron positivos respecto a la navegabilidad de la página y pudieron comprender de qué se trataba.

- Destacaron el hecho de poder guardar colegios en una pestaña de "favoritos", de poder comentar bajo el perfil de cada colegio, y les encantó nuestra propuesta utilizar íconos para describir características del establecimiento.

- Nos comentaron que, de existir una página como Apoderapi, definitivamente la usarían, ya que hoy en día no existe algo que cumpla una función similar. Nos aconsejaron integrar google maps, valoraciones del colegio tanto del Ministerio de Educación como de otros apoderados, y tener más opciones de filtro al momento de buscar colegio.

- Al momento de preguntar qué colores se imaginan en la página, los usuarios nos dijeron que se imaginan colores como azul, pero también nos nombraron el café. Como decisión de grupo, nos decidimos por el verde azulado o cyan que teníamos contemplado desde un principio.

## 6. Conclusiones

Para este proyecto, pudimos completar las primeras H.U, pero aún falta mucho para poder terminar la aplicación. Pudimos cumplir con casi todas las definiciones de terminado, y pudimos conocer lo que los usuarios realmente esperan de nuestro proyecto. 

## 7. Desarrolladoras

- Katherine Muñoz: decisiones de diseño e interfaz, iteraciones con usuarios, trabajo con Firebase en login y register, estilos con CSS y ReadMe.

- Fernanda Ocaranza: decisiones de diseño e interfaz, realización de encuesta inicial, iteraciones con usuarios, trabajo con Api y posterior creación de data de colegios, creación de select y tarjetas.

- Ieva Stumpe: decisiones de diseño e interfaz, trabajo con Firebase y github (master), trabajo con función post() y arreglos de código.

### Tecnología:

- Vainilla js
- Firebase
- CSS





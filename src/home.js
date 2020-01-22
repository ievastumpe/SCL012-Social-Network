


export function showHome(){
    //if(user.emailVerified){
        content.innerHTML = `
        <header>
            <h1>Nombre App</h1>
            <nav>
        		<img src="img/logo_test.png" class="images">
                <ul>
                    <li><a class="btnMenu">Filtrar </a></li>
					<li><a class="btnMenu">Inicio </a></li>
					<li><a class="btnMenu">Perfil</a></li>
					<li><a class="btnMenu"> Favoritos</a></li>
					<li><a class="btnMenu">Forum</a></li>
					<li><a class="btnMenu">Buscar</a></li>
				</ul>
			<img src="img/cerrablanco.png" class="close"id="closeSesion">
			</nav> 
        
        </header>
			<div class= "container"> 
		    <div class= "icono">
		    <img src = "img/icono-imagen.png" class= "iconos">
		    </div>
		<div class= "poster">
		<input type="text" id="post" class="post" >
		 </div>
		 <div class= "like">
		 <img src = "img/like.png" class= "like" id= "like">
		 </div>
		 <div class= "comentario">
		 <img src = "img/comment.png" class= "comentar" id= "comentar">
		 </div>                                                     
		</div>		
		
        `;
        
    //}

}
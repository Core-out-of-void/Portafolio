/*llamar funciones*/
document.getElementById("btn_registrar").addEventListener("click", registrar);
document.getElementById("btn_iniciar_sesion").addEventListener("click", login);
window.addEventListener("resize", pagina);

/*variables*/
var login_registro_cuerpo = document.querySelector(".contenedor_login-register")
var formulario_login = document.querySelector(".formulario_login")
var formulario_registro = document.querySelector(".formulario_registro")
var caja_trasera_login = document.querySelector(".caja_trasera_login")
var caja_trasera_registro = document.querySelector(".caja_trasera_register")
/*funciones*/

function pagina(){
	if(window.innerWidth > 850){
		caja_trasera_registro.style.display ="block";
		caja_trasera_login.style.display="block";
	}else{
		caja_trasera_registro.style.display ="block";
		caja_trasera_registro.style.opacity ="1";
		caja_trasera_login.style.display="none";
		formulario_login.style.display="block";
		formulario_registro.style.display="none";
		login_registro_cuerpo.style.left= "0px";
	}
}
pagina();

function login(){
	if(window.innerWidth > 850){
		formulario_registro.style.display = "none";
		login_registro_cuerpo.style.left = "10px";
		formulario_login.style.display="block";
		caja_trasera_registro.style.opacity ="1";
		caja_trasera_login.style.opacity="0";
	}
	else{
		formulario_registro.style.display = "none";
		login_registro_cuerpo.style.left = "0px";
		formulario_login.style.display="block";
		caja_trasera_registro.style.display ="block";
		caja_trasera_login.style.display ="none";
	}
	
}

function registrar(){
	
	if(window.innerWidth > 850){
		formulario_registro.style.display = "block";
		login_registro_cuerpo.style.left = "410px";
		formulario_login.style.display="none";
		caja_trasera_registro.style.opacity ="0";
		caja_trasera_login.style.opacity="1";
	}
	else{
		formulario_registro.style.display = "block";
		login_registro_cuerpo.style.left = "0px";
		formulario_login.style.display="none";
		caja_trasera_registro.style.display ="none";
		caja_trasera_login.style.display ="block";
		caja_trasera_login.style.opacity ="1";
	}
	
}


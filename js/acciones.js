// JavaScript Document
function LoginConectar (U, P)
{
	datos= "usuario=" +U+ "&password" +P;
	$.ajax({
		type: "POST",
		url: "192.168.1.195/Sitio6/Log_in_m.php" ,
		data: datos
	}).done(function(msg){
		alert(msg);
		if(msg=="" || msg==null)
		{
			alert("usuario incorrecto")
		}
		else
		{
			("Bienvenido")
		}
	});
}
	
$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		$('Enviar').tap(function(){
			var formulario=$(this).parent('form');
			var usuario= document.getElementById('Usuario').value;
			var password= document.getElementById('Password'),value;
			LoginConectar(usuario,password);			
			});//tap
			});//deviceready
			
});//ready

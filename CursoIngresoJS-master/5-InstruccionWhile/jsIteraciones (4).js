function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	
	while(numero < 0 || numero > 10){
		numero = prompt("re-ingrese un número")

	}
	document.write("Bienvenido")
}//FIN DE LA FUNCIÓN
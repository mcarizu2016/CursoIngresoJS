/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
	
	

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 contadorIntentos=0;
		//alert(numeroSecreto );
		numeroSecreto = Math.floor((Math.random() * 10) + 1);
	    alert(numeroSecreto);
	


}

function verificar()
{
	numero=document.getElementById('numero').value;
	if(numeroSecreto<numero){
		
		alert("El numero esta mas abajo");
		 
	 }
	else 
	{
		   if(numeroSecreto>numero)
			   {

			   	alert("El numero esta mas arriba");

			   }	
			else
				{
					
					alert("Usted es el ganador");
				}
		}
	contadorIntentos++;
	document.getElementById('intentos').value=contadorIntentos;
	
}
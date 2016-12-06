function Mostrar()
{
//tomo la edad  
var laEdad;
laEdad= document.getElementById('edad').value;
	if (laEdad<=12 || laEdad>=18) 
	{
		alert("es adolecente");
	}
	else
	{

		alert("no es adolecente");
	}

}//FIN DE LA FUNCIÓ
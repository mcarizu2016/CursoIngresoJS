function Mostrar()
{
//tomo la edad  
var laEdad;
laEdad= document.getElementById('edad').value;
	
/*	if(laEdad>=18)
	{	
		alert("18 o mas de 18");
	}

		if (laEdad>13 && laEdad<17) 
		{
			alert("es adolecente");
		}
		if(laEdad<13)
		{

			alert("es niño");
		}
	
*/		
if(laEdad>17)
	{	
		alert("18 o mas de 18");
	}
		else{
				if (laEdad<13 ) 
				{
					alert("niño");
				}
				else
				{

					alert("adolecente");
				}
			}	
}//FIN DE LA FUNCIÓ
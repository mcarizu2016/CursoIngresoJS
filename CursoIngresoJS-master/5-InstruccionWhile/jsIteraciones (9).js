function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var max;
	var min;
	var numeroIgresado=0;




	while(respuesta!='no')
	{
		numeroIgresado=prompt("ingrese numero");
		numeroIgresado=parseInt(numeroIgresado);

		if(contador==0){

			max=numeroIgresado;
			min=numeroIgresado;
		}
		else
		{
				if(numeroIgresado>max)
				{
					max=numeroIgresado;
					
				}
				if(numeroIgresado<min)
				{
					min=numeroIgresado;
					
				}

		}
		document.getElementById('maximo').value=max;
		document.getElementById('minimo').value=min;
		contador ++;
		respuesta=prompt("ingrese no para salir ");
		
	}




}//FIN DE LA FUNCIÓN
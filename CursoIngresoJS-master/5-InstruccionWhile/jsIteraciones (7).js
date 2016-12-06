function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	


	while(respuesta=='si')
	{
		contador ++;
		respuesta=prompt("ingrese si para continuar");
		num_ing = prompt("Ingrese otro número :" + contador);
		num_ing = parseInt(num_ing);
		acumulador = acumulador + num_ing;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
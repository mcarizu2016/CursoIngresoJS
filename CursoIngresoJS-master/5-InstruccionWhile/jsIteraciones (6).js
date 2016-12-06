function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var num_ing ;




	while(contador<5){

		contador ++;
		num_ing = prompt("Ingrese otro número :" + contador);
		num_ing = parseInt(num_ing);
		acumulador = acumulador + num_ing;
		}

		document.getElementById('suma').value=acumulador;
	    document.getElementById('promedio').value=acumulador/5;


		
	

}//FIN DE LA FUNCIÓN
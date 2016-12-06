function Mostrar()
{

	var contador=0;
	var cont_pos=0;
	var cont_neg=0;
	var numeroIngresado;
	
	var positivos;
	var negativos;
	
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numeroIngresado=prompt("Ingrese un numero");
		var numero=numeroIngresado;
	if(numeroIngresado==0)
		{	
			var cero =cero++;
		}
	if(numeroIngresado>0)
		{

			positivos=parseInt('numeroIngresado');
			var sum_pos=sum_pos+positivos;
			cont_pos = cont_pos ++;
			var prom_pos= sum_pos/cont_pos;
		}
	else
		{
			negativos=parseInt('numeroIngresado');
			var sum_neg=sum_neg+negativos;
			cont_neg = cont_neg ++;
			var prom_neg= sum_neg/cont_neg;			
		}
			var posneg= positivos-negativos; 

		if(numero % 2 == 0 )
		{
			var par;
			par ++;
		}
		
		document.write("-1_ La suma de los negativos:"+sum_neg+"<br>");
		document.write("-2_ La suma de los positivos:"+sum_pos+"<br>");
		document.write("-3_ La cantidad de los positivos:"+cont_pos+"<br>");
		document.write("-4_ La cantidad de los negativos:"+cont_neg+"<br>");
		document.write("-5_ Los ceros son:"+cero+"<br>");
		document.write("-6_ La cantidad de numeros pares:"+par+"<br>");
		document.write("-7_ El promedio de los positivos:"+prom_pos+"<br>");
		document.write("-8_ El promedio de los negativos:"+prom_neg+"<br>");
		document.write("-9_ La diferencia entre positivos y negativos es:"+posneg+"<br>");
	}




}//FIN DE LA FUNCIÓN
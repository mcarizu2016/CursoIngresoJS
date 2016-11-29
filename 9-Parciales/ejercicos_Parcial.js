/*- (IF) realizar el algoritmo que pida dos números por prompt, si son iguales que los multiplique, si el
primero es mayor al segundo que los reste y si no que los sume, mostrar el resultado por document.write.
*/
function ejer4(){

	var uno = promt('IngUno');
	var dos = promt('IngDos');
	var resultado;
	if (uno==dos){
		resultado=uno*dos;
		document.write("Son Iguales:"+resultado);
		}
	if (uno>dos){
		resultado=uno-dos;
		document.write("Son Iguales:"+resultado);
		else
			resultado=uno+dos;
			document.write("Son Iguales:"+resultado);
	}	
	
}

/* (IF) realizar el algoritmo que pida dos números por prompt, lo sume e informe si el resultado de la suma
“positivo”,” negativo” o “cero” por document.write.
*/

function ejer4_Recu(){

	var uno = promt('IngUno');
	var dos = promt('IngDos');
	var resultado;
	uno=parseInt(uno);

	resultado=uno+parseInt(dos);

	if (resultado == 0){
		
		document.write("Es Igual a cero:"+resultado);
		}
	if (resultado>0){
		
		document.write("Es positivo");
		else{
			
			document.write("Es negativo");
		}
	}	
	
}



/*
 (SWITCH)realizar el algoritmo que pida un día de la semana por prompt, si es un “Sábado” o “Domingo”
informar por alert “es fin de semana” de lo contrario informar por alert “a trabajar !!!” .
*/

function ejer5(){
	var dia = promt('dias');
	switch(dia){

		default :
			alert ("A Tabajar..");
		break;
	case "Sabado":			
	case "Domingo":		
		alert("es fin de semana");
		break;	
	}

}

/*

	(SWITCH) realizar el algoritmo que pida un MES por prompt, si es “Diciembre” informar por alert “Se
vienen las fiestas” ,si es “Enero” informar por alert “comienza el año”, de lo contrario informar por alert
“no es enero, ni diciembre” 

*/



function ejer5_Recu(){

var mes = promt('meses');
	

	switch(mes){

		default:
			alert("no es enero, ni diciembre");
			break;
		case"Diciembre":
		alert("Se vienen las fiestas");
			break;	
		case"Enero":
		alert("Comienza el año");
			break;	
	}

}
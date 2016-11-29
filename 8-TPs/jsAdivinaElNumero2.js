/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

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
	switch(numero){
		case "1":
			alert("Usted es un Psíquico");
			break;

		case "2":
			alert("excelente percepción");
			break;
		
		case "3":
			alert("esto es suerte");
			break;

		case "4":
			alert("excelente percepción");
			break;
		case "5":
			alert("excelente técnica");
			break;
		case "6":
			alert("falta técnica");
			break;
		default :
			alert(" usted es un panqueque...");	
			break;
		

	}

	contadorIntentos++;
	document.getElementById('intentos').value=contadorIntentos;
}

/*{
	
	numero=document.getElementById('numero').value;
	
	if(contadorIntentos==1 && numero==numeroSecreto){
		
		alert("Usted es un Psíquico");
    }
	if (contadorIntentos==2 && numero==numeroSecreto){
		alert("excelente percepción");
	}
		
	if (contadorIntentos==3 && numero==numeroSecreto){
			alert("Esto es suerte");
	}
	if( contadorIntentos==4 && numero==numeroSecreto){
			alert("excelente técnica");
	}		
	if (contadorIntentos==5 && numero==numeroSecreto){
	    	alert("Esta a la medida");
	}
	if( contadorIntentos>=6 && numero==numeroSecreto){
	alert("falta técnica");
	}	
		
	
	contadorIntentos++;
	document.getElementById('intentos').value=contadorIntentos;
	
}*/
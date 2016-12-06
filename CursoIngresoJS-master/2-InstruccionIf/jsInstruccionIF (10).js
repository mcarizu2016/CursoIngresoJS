function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var miRandom = Math.floor((Math.random() * 10) + 1);
	alert(miRandom);

	if(miRandom>=9){
		alert("Excelente");
		
		if( miRandom>=4){
				alert("Aprobó");
			
			else(miRandom<= 4)
				alert("La proxima sera");
		}	
    }
}//FIN DE LA FUNCIÓN
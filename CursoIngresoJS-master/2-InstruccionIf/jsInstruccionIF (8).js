function Mostrar()
{
//tomo la edad  
	var laEdad;
	var estadoCivil;
	
	estadoCivil=document.getElementById('estadoCivil').value;
    laEdad= document.getElementById('edad').value;

    console.info ("El valor de la variable estadoCivil"+estadoCivil);

	if(laEdad<18 && estadoCivil != "Soltero")
	{
			alert("No hace nada");
	}
	else{
		alert("es soltero y no es menor");
	}

}//
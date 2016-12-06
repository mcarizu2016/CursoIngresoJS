function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numeroIngresado;

	var respuesta ='si';
		

while(respuesta =='si'){

numeroIngresado=prompt("Ingrese un numero");
		
		if(numeroIngresado<0){
			negativo=negativo*numeroIngresado;
		}
		else{
			positivo= parseInt(positivo+numeroIngresado);
		}
		repuesta = prompt("ingrese para cuntinuar si para continuar");
}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
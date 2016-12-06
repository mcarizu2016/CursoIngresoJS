function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch(mesDelAño){

		case "Febrero":
			alert("Febrero tiene 28 dias");
			break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":	
		case "Octubre":
		case "Diembre":
			alert("Tiene 31 dias");
			break;
		default:
			alert("Tiene 30 dias");		
	}
	



}//FIN DE LA FUNCIÓN
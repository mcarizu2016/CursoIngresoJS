/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
 
function CalcularPrecio () 
{
 var precio =35;
 var cantidad=document.getElementById('Cantidad').value;
 var marca=document.getElementById('Marca').value;
 var preCant;
 var desc;
	
	if(cantidad>5){

	 	        //preCant = cantidad*precio;
				//desc= preCant*0.5;
				//preCant=preCant-desc;
				preCant=preCant*0.75;
				alert(preCant);
				document.getElementById('precioDescuento').value=preCant;

	 }

	 if(cantidad==5){
		 	if(marca=='ArgentinaLuz'){
		 			//preCant = cantidad*precio;
					//desc= preCant*0.6;
					//preCant=preCant-desc;
					preCant=preCant*0.6;
					alert(preCant);
					document.getElementById('precioDescuento').value=preCant;
			 }
			 else{
			 			//preCant = cantidad*precio;
						//desc = preCant*0.7;
						//preCant=preCant-desc;
						preCant=preCant*0.7;
						alert(preCant);
						document.getElementById('precioDescuento').value=preCant;
			 }
	}
	

	if (cantidad == 4){

		if (marca='ArgentinaLuz'||'FelipeLamparas')
		{
				//preCant = cantidad*precio;
				//desc= preCant*0.75;
				//preCant=preCant-desc;
				preCant=preCant*0.75;

				alert(preCant);
				document.getElementById('precioDescuento').value=preCant;
		}
		else
			{
				        //preCant = cantidad*precio;
						//desc= preCant*0.8;
						//preCant=preCant-desc;
						preCant=preCant*0.8;
						alert(preCant);
						document.getElementById('precioDescuento').value=preCant;	
			}

	}

	if (cantidad == 3){

			if ( marca =='ArgentinaLuz'){
			    //preCant = cantidad*precio;
				//desc= preCant*0.85;
				//preCant=preCant-desc;
				preCant=preCant*0.85;
				alert(preCant);
				document.getElementById('precioDescuento').value=preCant;
			}
			else
			{
				if( marca == 'FelipeLamparas')
			    {
				    //preCant= cantidad*precio;
					//desc= preCant*0.90;
					//preCant=preCant-desc;
					preCant=preCant*0.90;
					alert(preCant);
					document.getElementById('precioDescuento').value=preCant;
				}
				else 
				{
					//preCant= cantidad*precio;
					//desc= preCant*0.95;
					//preCant=preCant-desc;
					preCant=preCant*0.95;
					alert(preCant);
					document.getElementById('precioDescuento').value=preCant;
				}
				
			}	
	}

	if(preCant>120){
		
		var impuesto=preCant *0.10;
		preCant=preCant*1.10;
		alert("IIBB Usted pago: "+preCant+" de IIBB");
	}
}

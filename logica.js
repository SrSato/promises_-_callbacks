let teLoJuroPorSnoopy =new Promise((resolve,reject) =>{	
		//Esto se haría con un proceso asíncrono... Por ejemplo una llamada a una API
		//pero aquí lo vamos a hacer con un resultado random para probar las dos salidas
		//de la promesa.
		let numeritoRandom = Math.random();
		if(numeritoRandom>0.5){
			resolve("¿Lo ves, alma de cántaro???. Cumplida");
		}else{
			reject("Quien tiene boca se equivoca. Rechazada");
		}
});

teLoJuroPorSnoopy.then((mensajito)=>{
	console.log("Todo bien. Da este mensaje: "+mensajito);
}).catch((mensajito)=>{
	console.log("Algo se ha roto. Esto pasa: "+mensajito);
})


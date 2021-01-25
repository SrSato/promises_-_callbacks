let validaEstudiante = (nota,callback) =>{
	if(nota>5){
		callback("Bienvenido al siguiente curso");
	}else{
		callback(new Error("Hay un problema con la nota!!!"));
	}	
}

validaEstudiante(prompt("Dame tu nota de acceso (Del 1 al 10): "),console.log);
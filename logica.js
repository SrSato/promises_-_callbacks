let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

let getEmpleado = (id)=>{
	let empleado =new Promise((resolve,reject) =>{	
		employees.forEach(busca);
		function busca(employe){
			if(employe.id==id){			
				resolve(employe.name);
			}
		}
		reject("No se encuentra ese id de empleado");	
	});
	return empleado;
}

getEmpleado(1).then((mensajito)=>{
	console.log("Todo bien. Da este mensaje: "+mensajito);
}).catch((mensajito)=>{
	console.log("Algo se ha roto. Esto pasa: "+mensajito);
})


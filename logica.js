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

let getSalario =(empleado)=>{
	let salario = new Promise((resolve,reject)=>{
		salaries.forEach(mount=>{
			if(mount.id==empleado.id){
					resolve(mount.salary);
				}
			});
		reject("Esta personita no cobra");	
	});
	return salario;
}

getSalario(employees[2]).then((mensajito)=>{
	console.log("Todo bien. Da este mensaje: "+mensajito);
}).catch((mensajito)=>{
	console.log("Algo se ha roto. Esto pasa: "+mensajito);
})


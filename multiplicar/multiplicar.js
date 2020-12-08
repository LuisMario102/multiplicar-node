const fileSistem = require('fs');
const colors = require('colors');

let listarTabla = (base, tope)=>{

	return new Promise((resolve,proyect)=>{

		console.log('======================='.green);
		console.log(`==== Tabla de ${base} ====`.green);
		console.log('======================='.green);

		if(!Number(base)){

			reject(`Escribe correctamente la base y el tope`);
			return;

		}else if(!Number(tope)){

			reject(`Escribe correctamente la base y el tope`);
			return;

		}else{

			let datos = '';

			for (var i = 1; i <= tope; i++) {

				datos += `\n${base}x${i} = ${base*i}`;

			}

			resolve(datos);

		}

	})

}

let crearArchivo = (base, tope)=>{

	return new Promise((resolve, reject)=>{

		if(!Number(base)){

			reject(`El escribe correctamente la base y el tope`);
			return;

		}else{

			let datas = '';

			for (let i = 1; i <= tope; i++) {

				datas += `${base} * ${i} = ${base*i}\n`;

			}

			const data = new Uint8Array(Buffer.from(datas));
			fileSistem.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
			  if (err){reject (err)}else{
			  	resolve(`tabla-${base}.txt`);
			  }
			  
			});

		}

	});	

}

module.exports = {
	crearArchivo,
	listarTabla
}
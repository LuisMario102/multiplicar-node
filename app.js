// REQUERIMIENTOS
const argv = require('./config/yarg').argv;
const colors = require('colors');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let crear = argv._[0];

switch (crear){

	case ('listar'):

		listarTabla(argv.base, argv.tope)
			.then(datos=>console.log(datos))
			.catch(error=>console.log(error));

		break;

	case ('crear'):

		crearArchivo(argv.base, argv.tope)
			.then(archivo => console.log(`archivo creado: ${archivo.green}`))
			.catch(e => console.log(e));

		break;

	default:
		console.log('Comando no reconocido');
}
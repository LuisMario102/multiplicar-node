const opts = {
	base: {
		demand:true,
		alias:'b'
	},
	tope: {
		default:10,
		alias:'t'
	}
}

const argv = require('yargs')
		.command('listar','Imprime en la consola la tabla de multiplicar', opts)
		.command('crear','Crea la tabla de multiplicar', opts)
		.help()
		.argv;

module.exports = {
	argv
}
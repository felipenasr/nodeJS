var fs = require('fs');

var leituraAsync = function (arquivo) {
	console.log('fazendo leitura assincrona');
	var inicio = new Date().getTime();
	fs.readFile(arquivo);
	var fim = new Date().getTime();
	console.log('bloqueio assincrono: ' +(fim - inicio) +'ms');
}

module.exports = leituraAsync;
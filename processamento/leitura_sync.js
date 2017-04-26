var fs = require('fs');

var leituraSync = function (arquivo) {
	console.log('fazendo leitura assincrona');
	var inicio = new Date().getTime();
	fs.readFileSync(arquivo);
	var fim = new Date().getTime();
	console.log('bloqueio assincrono: ' +(fim - inicio) +'ms');
}

module.exports = leituraSync;
var	http	=	require('http');
//requere o protocolo http
var	url	=	require('url');
//trabalha com as informações passadas pelo usr na barra de endereço
var	server	=	http.createServer(function(request,	response){
// criando servidor local
	response.writeHead(200,	{"Content-Type":	"text/html"});
//definindo o timpo de texto
	response.write("<h1>Dados	da	query	string</h1>");
// mandando imprimir informações na tela do brwoser
	var	result	=	url.parse(request.url,	true);
//solicitando os resultados por meio da função request url
	for(var	key	in	result.query){
		response.write("<h2>"+key+"	:	"+result.query[key]+"</h2>");
	}
	response.end();
});
server.listen(3000,	function(){

//funcao que testa se o callback da funcoes de protocolo estao funcionando
	console.log('Servidor	http.');
});
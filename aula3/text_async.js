var fs = require('fs');

for(var i = 1; i<=5; i++){
	var file = "bsync-txt" + i + ".txt";
	fs.writeFile(file,"Hello", function(err, out){
		console.log(out);
	});
}
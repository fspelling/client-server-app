var http = require('http');
var bufferList = [];
var json = { nome: 'jose' }
var opcoes = {
    hostname: 'localhost',
    port: 4000,
    path: '/',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};

/*http.get(opcoes, function(res){
    res.on('data', function(pedaco){
        bufferList.push(pedaco);
    });

    res.on('end', function(){
        console.log(Buffer.concat(bufferList).toString());
    });
});*/

var req = http.request(opcoes, function(res){
    res.on('data', function(pedaco){
        bufferList.push(pedaco);
    });

    res.on('end', function(){
        console.log(Buffer.concat(bufferList).toString());
    });
});

//req.write(JSON.stringify(json));
req.end();
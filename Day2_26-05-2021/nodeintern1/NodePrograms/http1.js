var http = require('http');

var server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type' : 'text/plain'});
    res.end('hello world in node js 212\n');
}).listen(5000);

console.log('server running at http://127.0.0.1:5000/');
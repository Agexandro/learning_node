var http = require("http");
var url = require("url");

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.name;
    res.end(txt);
}).listen(4300);
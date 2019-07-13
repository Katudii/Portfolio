const http = require('http');

http.createServer((req,res)=>{
    res.write('real friends');
    res.end();
}).listen(3001,()=>console.log('yeah we on!'));
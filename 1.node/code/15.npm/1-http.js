const http = require('http')

//서버생성 : createServer()

console.log('server start ~');
const server =  http.createServer((req,res)=>{
  console.log('incoming...');
  console.log(req.headers);
})

server.listen(8080); //http://localhost:8080
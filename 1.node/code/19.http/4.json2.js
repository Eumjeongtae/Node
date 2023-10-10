const http = require('http')

let address =[
]

console.log('======= server start =======');
const server = http.createServer((request,response)=>{
  let url = request.url
  let method = request.method
  console.log(url);
  console.log(method);

  if(url === '/address'){

    if(method === 'GET'){

      if(address.length !=0){
        response
        .writeHead(200,{
          'Content-Type' : 'application/json'
        })
        .end(JSON.stringify(address));
        
      }else{
        response
        .write('== No Data --')
        response.end();
      }
      
    }else if(method ==='POST'){
      const body = []
      request
      .on('data',(chunk)=>{
        console.log(chunk.toString());
        body.push(chunk)
      })
      .on('end',()=>{
        // const bodyStr = Buffer.concat(body).toString()
        // const jsonStr = JSON.parse(bodyStr)
        address.push(JSON.parse(Buffer.concat(body).toString()))
        response.writeHead(201)
        response.end()
      })

      

    }

  }else{
    response.write('File not Found!')
    response.end()
  }
})

server.listen(9000)
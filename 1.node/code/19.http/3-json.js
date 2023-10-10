const http = require('http')

const course = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavScript' },
  { name: 'Node' },
  { name: 'Express' },
];

//서버생성
//서버 리스닝 (8080)
console.log('======= server start =======');
const server = http.createServer((request, response) => {
  const url = request.url
  const method = request.method

  if (url === '/course') {
    if (method === 'GET') {
      const strCourse = JSON.stringify(course) // 제이슨형식으로 데이터 수정
      response.writeHead(200,{
        'Content-Length': Buffer.byteLength(strCourse),
        'Content-Type': 'application/json',
      })
      .end(strCourse) 

      

    }else if(method === 'POST'){
      //post 방식으로 요청이 오면 --> JSON 데이터 받기
      const body = [];
      request.on('data',(chunk)=>{
        body.push(chunk)
      });

      request.on('end',()=>{
        // body 데이터를 string
        const bodyStr = Buffer.concat(body).toString()
        // string 문자열을 JSON객체로 파싱
        const newCourse = JSON.parse(bodyStr);
        // course 배열에 추가 
        course.push(newCourse)
        //결과 완료 전송
        response.writeHead(201);
        response.end();
      })

    }

    

  } else {
    response.write('File not Found ~~')
    response.end()

  }

});
server.listen(8080);
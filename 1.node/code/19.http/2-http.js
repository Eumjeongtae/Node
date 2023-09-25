const http = require('http')
const fs = require('fs')

//서버생성 : createServer()

console.log('server start ~');
const server = http.createServer((req, res) => {
  console.log('incoming...');

  const url = req.url
  console.log(`url ---->${url}`);

  //응답생성 - url의 path별로 응답 처리    /join  /login 
  res.setHeader('Content-Type', 'text/html')

  if (url === '/') {
    fs.createReadStream('./test/main.html').pipe(res); //Stream 쓰는 이유 : 파일이 크기떄문에 쪼개서 전송
    // res.end();
  } else if (url === '/course') {
    fs.createReadStream('./test/course/course.html').pipe(res);
    // res.end();
  }else if (url === '/login') {
    fs.createReadStream('./test/login.html').pipe(res);
    // res.end();
  }  else {
    fs.createReadStream('./test/error.html').pipe(res);
    // res.end();
  }

})

server.listen(9000); //http://127.0.0.1:9000
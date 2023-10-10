const http = require('http')
const fs = require('fs')
const ejs = require('ejs')
// const proess = require('process')
const path = require("path");


const name = 'Hong';
let course = [
  { name: 'HTML' },
  { name: 'Node.js' },
  { name: 'CSS' },
  { name: 'JavaScropt' },
]

let scoreList = [
  { name: 'HTML', grade:'A' },
  { name: 'Node.js' ,grade:'A'},
  { name: 'CSS' ,grade:'A'},
  { name: 'JavaScropt' ,grade:'A'},
]

console.log('-- server start --');
const server = http.createServer((req, res) => {
  console.log('incoming....');
  //1. 클라이언트 요청 : URL 받아옴
  let url = req.url;

  //2. 클라이언트 전송타입
  res.setHeader('Content-Type', 'text/html')

  //3. 패스 체크 : / --> index.ejs

  if (url === '/') {
    //3. ejs.renderFile(매개변수) <= 프로미스타입 처리

    ejs.renderFile('./templete/index.ejs', { name })
      .then((data) => res.end(data))
      .catch(console.error)
  } else if (url === '/course') {

    ejs.renderFile('./templete/course.ejs', { course })
      .then((data) => res.end(data))
      .catch(console.error)

  } else if (url === '/score') {

    ejs.renderFile('./templete/score.ejs', { scoreList })
      .then((data) => res.end(data))
      .catch(console.error)

  }else {
    ejs.renderFile('./templete/error.ejs',{name})
      .then((data)=>res.end(data))
      .catch(console.error)
  }







})
server.listen(3000); //http://127.0.0.1:3000



const fs = require('fs').promises
const os = require('os')

//test.txt 파일을 읽어 콘솔에 출력

fs.readFile('test.txt', 'utf-8')
  .then((data) => { console.log(data) })
  .catch(console.error)

// text.txt 파일 문자열 덮어쓰기

// fs.writeFile('./test.txt', 'hello~ javascript coders!!!')
//   .then(console.log('-- write complete --'))
//   .catch(console.error)

//test.txt 파일 데이터 추가

fs.appendFile('./test.txt', 'hello~ javascript coders!!!'+ os.EOL)
  .then(console.log('-- write complete --'))
  .catch(console.error)

//text.txt 파일을 복사하기

// fs.copyFile('./test.txt','./test-copy.txt')
//   .catch(console.error)


//'sub-foler' 생성

// fs.mkdir('sub-foler')
//   .then(console.log)
//   .catch(console.error)
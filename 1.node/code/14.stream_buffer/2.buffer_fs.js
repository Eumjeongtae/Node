const fs = require('fs');
const process = require('process')


//파일 읽기 전, 후 => 메모리 사용량 체크
console.log(process.memoryUsage().rss);



// fs.readFile('./file.txt', (err, data) => {
//   // 읽은 데이터를 file2.txt 파일에 저장
//   fs.writeFile('./file2.txt', data, () => {
//     console.log(process.memoryUsage().rss);

//   })
// });

fs.promises.readFile('file.txt')
  .then((data) => {
    // 파일저장 --> file3.txt
    fs.promises.writeFile('./file3.txt', data)
      .then(console.log(process.memoryUsage().rss))
      .catch(console.error)
  })
  .catch(console.error)



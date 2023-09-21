const fs = require('fs')

//파일을 읽어오는 방법 --> Stream

const readStream = fs.createReadStream('./file.txt',{highWaterMark:64})
const buf = [];
readStream.on('data',(chunk) =>{
  buf.push(chunk)
  console.count('ddta')
  // console.log(chunk.toString());

  // readStream.close();
})

// readStream.on('close',()=>{

//   console.log(buf.length);
//   console.log(buf);
//   console.log(buf.join(''));
//   console.log('finished');
// })
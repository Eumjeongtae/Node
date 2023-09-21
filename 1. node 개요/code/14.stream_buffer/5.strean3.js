const fs = require('fs')
const readStream = fs.createReadStream('./file.txt',{highWaterMark:16})
const writeStream = fs.createWriteStream('./file-stream.txt',{})

//readStream을 이용하여 file.txt 파일내용을 16바이트씩 읽어서
// file-stream.txt 파일안에 wruteStream을 이용하여 저장ㅎ해주세여


readStream.on('data',(chuck)=>{
  writeStream.write(chuck)
})
.on('close',()=>console.log('-- finish --'))
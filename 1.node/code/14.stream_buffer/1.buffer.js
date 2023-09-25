const fs = require('fs')

const buf = Buffer.from('Hi~fgfgfgfg') //HI

console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf[2]);
console.log(buf.toString());

const buf2 = Buffer.alloc(buf.length);
console.log(buf2.length);
console.log(buf2);
buf.copy(buf2); // buf의 내용을 복사하려 buf2에 저장
console.log(buf2);

const newBuf = Buffer.concat([buf,buf2])
console.log(newBuf);
console.log(newBuf.toString());

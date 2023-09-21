const path = require("path");

// 윈도우 : c:\dev\code\test.js
// 맥,리눅스 : /users/test/

console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

//basename

console.log(path.basename(__filename));
console.log(path.basename(__dirname));


//dirname

console.log(path.dirname(__dirname));

//extension

console.log(path.extname(__filename));

//parse

const parsed = path.parse(__filename) // 오브젝트형태로 출력
console.log(parsed);
parsed.root;
parsed.name

const str = path.format(parsed) //string 형태로 변환
console.log(str);

//normalize

console.log(path.normalize('./folderr'));

//join

console.log(__dirname + '/'+'image');

console.log(__dirname + path.sep +'image' );
console.log(__dirname + path.join +'image' );
const fs = require('fs')
const writeStream = fs.createWriteStream('./file4.txt',{})

writeStream.write('hrllo~~\r\m');
writeStream.write('hrllo~~\r\m');

writeStream.end();
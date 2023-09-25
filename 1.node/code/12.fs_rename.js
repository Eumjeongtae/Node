const fs = require('fs');

// fs에서는 3가지 방식으로 제공

// synchoronous : renamaSync(old, new)
// try {
//   fs.renameSync('./test.txt', './test-new.txt')
//   console.log('-- rename success --');
// } catch (error) {
//   console.log('-- error --');
//   console.log(error);
// }

// console.log('test');

//callback : rename(old , new , callback)

// fs.rename('./test.txt', './test-new.txt',(error)=>{
//   console.log(error);
// })

//promise : rename(old, new)

fs.promises
  .rename('./test.txt', './test-new.txt')
  .then(()=>console.log('성공'))
  .catch((error)=> console.log(error))
  .finally(()=>console.log('-- terminate --'))

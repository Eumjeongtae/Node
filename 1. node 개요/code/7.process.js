const process = require('process');

// console.log(process.execPath);
// console.log(process.version);
// console.log(process.pid);
// console.log(process.ppid);
// console.log(process.platform);
// console.log(process.env);
// console.log(process.uptime());
// console.log(process.cwd());
// console.log(process.cpuUsage());

//setTimeout(콜백함수,시간); --> non-blocking

global.setTimeout(() => {
  console.log('setTimeout');
}, 3000);

//nextTick(콜백함수) --> non-blocking
process.nextTick(()=>{
  console.log('nextTick!');
})
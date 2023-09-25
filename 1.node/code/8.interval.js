// 1초에 정수를 하나씩 증가하여 출력하는 함수

const { clearInterval } = require("timers");

let a = 0

const interval =  setInterval(() => {

  console.log(a++);

}, 1000);

setTimeout(() => {
  console.log('--Timeout!--');
  clearInterval(interval)
}, 6000);
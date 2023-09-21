let counte = 0;

let increase = ()=>{
  counte++
}

let getCount = ()=>{
  return counte;
}

module.exports.increase = increase
module.exports.getCount = getCount
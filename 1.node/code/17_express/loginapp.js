const express = require("express");
const app = express();
const proccess = require('process')
const path = require('path')
let memberList = [];

console.log('---- server start! ----');

// pasth가 root이면 welcome 메세지 출력
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'))
})
app.get('/login', (req, res) => {
  // console.log(path.join(__dirname,'login.html'));  현재 경로
  // console.log(path.join(proccess.cwd(),'login.html')); 현재 경로

  res.sendFile(path.join(__dirname,'login.html'))
})

app.get('/join', (req, res) => {
  res.sendFile(path.join(__dirname,'join.html'))
})
// app.get('/loginfail', (req, res) => {
//   res.sendFile(path.join(__dirname,'loginfail.html'))

// })

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/login', (req, res) => {
  const {id,pass} = req.body
  let result = 0;
  // memberList에서 id,pass일치하면 --> 1, 일치하지 않으면 0
  console.log(memberList);

  for(let i = 0; i < memberList.length; i++){
    let member = memberList[i]
    if(id === member.id && pass === member.pass){
      result = 1;
      i = memberList.length 
    }
  }
  if(result = 1){
    res.redirect('/')
  }else{
    res.sendFile(path.join(__dirname,'loginfail.html'))
  }

  // if (id === 'test' && pass === '1234') {
  //   res.redirect('/')
  // } else {
  //   res.sendFile(path.join(__dirname,'loginfail.html'))
  // }

})


app.post('/join',(req,res)=>{
  const{name,id,pass,address} = req.body
  memberList.push({name,id,pass,address})
  res.redirect('/');
})

app.get('/error',(req,res)=>{
  res.sendFile(path.join(__dirname,'error.html'))
})

app.listen(8080);

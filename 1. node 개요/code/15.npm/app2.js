const process = require('process')
const path = require("path");
const fs = require('fs')

let folder = process.argv[2]
let home = path.join(process.cwd(),folder)
let videoDir = path.join(home,'video')
let imgDir = path.join(home,'img')

if(!fs.existsSync(folder)) fs.mkdirSync(folder)
if(!fs.existsSync(videoDir)) fs.mkdirSync(videoDir)
if(!fs.existsSync(imgDir)) fs.mkdirSync(imgDir)

fs.readdir(home,(err,file)=>{
  file.forEach(files=>{
    fileCheck(files)
  })
})

let  fileCheck = (files)=>{
  if(path.parse(files).ext == '.png'){
    push(files,imgDir)
  }else if(path.parse(files).ext == '.mp4'){
    push(files,videoDir)

  }
  
}

let push = (file,targetFolder) =>{
  let oldPath = path.join(home,file)
  let newPath = path.join(targetFolder,file)

  fs.promises.rename(oldPath,newPath)
  .catch(console.err)
}

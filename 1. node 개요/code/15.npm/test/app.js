const fs = require('fs')
const path = require("path");
const process = require('process')

/*
제목 : 사진 폴더 정리 Script 생성
요구사항 
 1. 동영상(mp4), 이미지(png) 파일들이 함꼐 있는 폴더를 
    각각 동영상과 이미지를 분리하여 관리
 2. 동영상 파일은 video 폴더에 png 파일은 capture폴더에 각각 이동하여 정리
*/
// const workingDir = process.cwd()// 현재 파일경로
// const videoDir = path.join(workingDir , 'video') //현재 폴더의 경로에 video폴더경로 추가
// const captureDir = path.join(workingDir , 'capture')

//실행하는 명령어의 매개면수를 받아 workingDir 설정하여 히위폴더 video,capture 폴더 생성

const folder = process.argv[2]
console.log(folder);
const workingDir = path.join(process.cwd(),folder)// 현재 파일경로
const videoDir = path.join(workingDir , 'video') //현재 폴더의 경로에 video폴더경로 추가
const captureDir = path.join(workingDir , 'capture')



// console.log(videoDir);
// console.log(captureDir);
if(!fs.symlinkSync(workingDir)) fs.mkdirSync(workingDir)
if(!fs.existsSync(videoDir)) fs.mkdirSync(videoDir) // 해당 폴더에 폴더가 없을경우
if(!fs.existsSync(captureDir)) fs.mkdirSync(captureDir)

//현재 경로의 모든 파일을 읽음

fs.promises.readdir(workingDir)
  .then((files)=>{
    fileCheck(files)
  })
  .catch()


let fileCheck = (files)=>{
  files.forEach(file=>{
    if(isVideofile(file)){
      move(file,videoDir)
    }else if (isPngfile(file)){
      move(file,captureDir)
    }
  })
}

let isVideofile = (file)=>{
  return path.parse(file).ext==='.mp4' ? true : false //확장자면이 mp4
}

let isPngfile = (file)=>{
  return path.parse(file).ext==='.png' ? true : false //확장자면이 png
}

let move =(file,targetDir)=>{
  // fs.rename(file,targetDir,(err)=>console.log(err))
  const oldPath = path.join(workingDir,file)
  const newPath = path.join(targetDir,file)
  fs.promises
  .rename(oldPath, newPath)
  .catch((error)=> console.log(error))
}

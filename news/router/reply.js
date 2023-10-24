import express from 'express';
import dbConfig from '../db/database.js';

const conn = dbConfig.init();
dbConfig.connect(conn);

const router = express();

let replyList = []

router.use(express.json()) // for parsing application/json
router.use(express.urlencoded());

//댓글 등록
router.get('/:nid',(req,res,next) =>{ // 사이트 처음 로드될떄 가져옴
  let nid = req.params.nid;
  const sql = 'select rid, content, nid, redate from news_reply where nid = ?';
  conn.query(sql,nid,(err,rows,fileds)=>{
    if(err) console.log(err);
    else res.json(rows)
  })
  
})
router.post('/', (req, res, next) => { // post 될시 
  const { nid, content } = req.body;
  const sql = 'insert into news_reply(content,nid,redate) values(?,?,sysdate())';
  const params = [content,nid];
  conn.query(sql,params,(err)=>{
    if(err)console.log(err);
    else res.status(201).send('success')
  })
  
})

export default router;

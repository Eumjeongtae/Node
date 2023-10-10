import express from 'express';

const router = express();

let replyList = []

router.use(express.json()) // for parsing application/json
router.use(express.urlencoded());

//댓글 등록
router.get('/:nid',(req,res,next) =>{ // 사이트 처음 로드될떄 가져옴
  let nid = req.params.nid;
  const rlist = replyList.filter(reply => reply.nid === nid)
  res.json(rlist)
})
router.post('/', (req, res, next) => { // post 될시 
  const { nid, replyContent } = req.body;
  replyList.push({ nid, replyContent })
  const rlist = replyList.filter(reply => reply.nid === nid)
  res.json(rlist) // res로 새로운 배열 전송
  res.status(201).send('success')
  // ejs.renderFile('./template/reply.ejs', { replyList })
  //   .then((data) => res.end(data))

})

export default router;

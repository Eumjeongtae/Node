import express from 'express';

const router = express();

let replyList = []

router.use(express.json()) // for parsing application/json
router.use(express.urlencoded());

//댓글 등록
router.get('/:nid',(req,res,next) =>{
  let nid = req.params.nid;
  const rlist = replyList.filter(reply => reply.nid === nid)
  res.json(rlist)
})
router.post('/', (req, res, next) => {
  const { nid, replyContent } = req.body;
  // res.status(201).send('success')
  replyList.push({ nid, replyContent })
  res.json(replyList)
  // ejs.renderFile('./template/reply.ejs', { replyList })
  //   .then((data) => res.end(data))

})

export default router;

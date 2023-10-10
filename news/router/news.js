import express from 'express';
import ejs from 'ejs'

const router = express();

let newsList = [
  {
    nid: 100,
    url: 'https://imgnews.pstatic.net/image/origin/015/2023/10/06/4899241.jpg?type=nf132_90',
    title: '윤재옥 "민생·책임·희망 국감, 3대 기조로 임하겠다"',
    content: "윤재옥 국민의힘 원내대표는 21대 국회 마지막 국정감사를 '민생부터 민생까지'라는 슬로건으로 정하고 '민생 국감, 책임 국감, 희망 국감'이라는 3대 기조로 임하겠다고 6일 밝혔다.",
    rdata: '2023.10.6'
  },
  {
    nid: 101,
    url: 'https://imgnews.pstatic.net/image/origin/422/2023/10/05/622463.jpg?type=nf132_90',
    title: '윤 대통령, 신원식 청문보고서 내일까지 재송부 요청',
    content: "윤석열 대통령은 신원식 국방부 장관 후보자에 대한 인사청문보고서 재송부를 국회에 요청했습니다.대통령실은 윤 대통령이 오늘(5일) 오전 청문보고서 재송부 요청안을 재가했다고 밝혔습니다.",
    rdata: '2023.10.7',
  }
]

router.use(express.json()) // for parsing application/json
router.use(express.urlencoded());

router.get('/', (req, res, next) => {
  ejs.renderFile('./template/list.ejs', { newsList })
    .then((data) => res.end(data))
})
router.post('/register', (req, res, next) => {
  let { url, title, content } = req.body
  const nid = parseInt(Math.random() * 1000);
  let rdata = new Date(Date.now());
  rdata = rdata.toLocaleDateString();
  newsList.push({nid,url,title,content,rdata});
  res.redirect('/news')
})

router.get('/:nid',(req,res,next) =>{
  let {nid} = req.params
  let newsContent = newsList.filter(news=> news.nid === parseInt(nid))
  ejs.renderFile('./template/content.ejs', { newsContent })
  .then((data) => res.end(data))
})

export default router;

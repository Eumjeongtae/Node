import express from 'express';
import ejs from 'ejs'

const router = express.Router();
let dwiterList = [
  {
    pid: 100,
    id: 'james',
    name: '제임스',
    date: '2023. 10. 5',
    content: '안녕하세용~!',
  },
  {
    pid: 101,
    id: 'hong',
    name: '홀길동',
    date: '2023. 10. 5',
    content: '안녕하세용 홍길동입니다~!',
  },
  {
    pid: 102,
    id: 'hong',
    name: '홀길동',
    date: '2023. 10. 5',
    content: '안녕하세용 홍길동입니다~!222222',
  },
]

router.use(express.json()) // for parsing application/json
router.use(express.urlencoded());


// 1. GET: /dwiter - ALL Dwitter List
router.get('/', (req, res, next) => {
  const renderList = dwiterList
  ejs
    .renderFile('./template/index.ejs', { renderList })
    .then((data) => { res.end(data) })
})


// 2. POST: /dwiter - tweet create
router.post('/', (req, res, next) => {
  const { id, name, content } = req.body
  const pid = Math.trunc(Math.random() * 1000)
  let date = new Date(Date.now());
  date = date.toLocaleDateString();
  dwiterList.push({ pid, id, name, content, date })
  res.redirect('/dwitter');
})
// 3. GET: /dwiter?id=자신의 아이디
router.get('/:id', (req, res, next) => {
  const { id } = req.params
  const renderList = dwiterList.filter(dwitter => dwitter.id === id)
  ejs
    .renderFile('./template/index.ejs', { renderList })
    .then((data) => { res.end(data) })
})
//    GET: /dwiter/:id - My Dwitter List
// 4. put: /dwiter/:id  - My Dwitter Update
router.put('/', (req, res, next) => {
  const { pid, content } = req.body
  dwiterList.filter(dwitter => {
    dwitter.content = (dwitter.pid === parseInt(pid)) ? content : dwitter.content
  })
  res.status(204).send('update success!!')
})
// 5. DELETE : /dwiter/:id - My Dwitter delete  
router.delete('/', (req, res, next) => {
  const { pid } = req.body
  dwiterList = dwiterList.filter(dwitter => dwitter.pid !== parseInt(pid))
  res.status(204).send('delete success!!')
})

export default router;
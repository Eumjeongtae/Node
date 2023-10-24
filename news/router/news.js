import express from 'express';
import ejs from 'ejs'
import dbConfig from '../db/database.js';

const conn = dbConfig.init();
dbConfig.connect(conn);

const router = express();

let newsList = [

]

router.use(express.json()) // for parsing application/json
router.use(express.urlencoded());

router.get('/', (req, res, next) => {
  const sql = 'select nid,url,title,content,left(rdate,10) as rdate from news';
  conn.query(sql, (err, rows, fields) => {
    if (err) console.log(err);
    else {
      ejs.renderFile('./template/list.ejs', { list: rows })
        .then((data) => res.end(data))
    }
  })
})
router.post('/register', (req, res, next) => {
  let { url, title, content } = req.body;
  const sql = 'insert into news(url,title,content,rdate) values(?,?,?,curdate())';
  const params = [url, title, content];
  conn.query(sql, params, (err) => {
    if (err) console.log(err);
    else res.redirect('/news')
  })
})

router.get('/:nid', (req, res, next) => {
  let { nid } = req.params
  const sql = 'select nid,url,title,content,left(rdate,10) as rdate from news where nid = ? ';
  conn.query(sql, nid, (err, rows, fields) => {
    if (err) console.log(err);
    else {
      ejs
        .renderFile('./template/content.ejs', { newsContent: rows[0] })
        .then((data) => res.end(data))
    }
  })

})

router.delete('/:nid', (req, res, next) => {
  const { nid } = req.body
  const sql = 'delete from news where nid = ?'
  conn.query(sql,nid,(err)=>{
    if(err) console.log('에러메세지 : ' + err);
    else res.status(204).send('delete success!!')
  })
})

export default router;

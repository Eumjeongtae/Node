import express from 'express';
import ejs from 'ejs'
import * as list from './data.js'
import dbConfig from '../db/database.js';

const conn = dbConfig.init();
dbConfig.connect(conn);


const router = express();




router.get('/:bs_id/:page', (req,res,next) =>{
  
  const bs_id = req.params.bs_id
  console.log(req.params);

  const sql = '    select bs_title,bname,bname_comment,author,publisher,left(pdate,10) as pdate,translator,price,dc from yes24_books b,yes24_bs_category c where b.bs_id = c.bs_id  and c.bs_id =?;';
  conn.query(sql,bs_id, (err, rows, fields) => {
    if (err) console.log(err);
    else {
      res.json({list:rows})
    }
  })

  
})

export default router;
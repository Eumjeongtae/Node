import ejs from 'ejs'
import express from 'express'
import {getBooks} from './data.js'
const router = express()
router.get('/',async(req,res,next) =>{
  ejs.renderFile('./template/list.ejs',{})
    .then(data=>res.end(data))
      let bookData = await getBooks()
      console.log(bookData);
    
})

export default router

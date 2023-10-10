import ejs from 'ejs'
import express from 'express'
const router = express()

router.get('/',(req,res,next) =>{
  ejs.renderFile('./template/list.ejs',{})
    .then(data=>res.end(data))
})

export default router

import express from 'express';
import ejs from 'ejs'
import * as list from './data.js'


const router = express();




router.get('/:page', (req,res,next) =>{
  res.json(list.hotPriceBestsellerList)
})

export default router;
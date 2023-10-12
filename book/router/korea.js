import ejs from 'ejs'
import express from 'express'
import { getBooks } from './data.js'
const router = express()
const category = {
  ItemNewAll: 'ItemNewAll',
  ItemNewSpecial: 'ItemNewSpecial',
  ItemEditorChoice: 'ItemEditorChoice',
  Bestseller: 'Bestseller',
  BlogBest: 'BlogBest',
}
router.get('/', async (req, res, next) => {
  let { ItemNewAll, ItemNewSpecial, ItemEditorChoice, Bestseller, BlogBest } = category
  let newbookData = await getBooks(ItemNewAll, 10)
  newbookData = newbookData.item;

  let bookDataSpecial = await getBooks(ItemNewSpecial, 10)
  bookDataSpecial = bookDataSpecial.item;

  let bookBestseller = await getBooks(Bestseller, 10)
  bookBestseller = bookBestseller.item;

  
  let bookBlogBest = await getBooks(BlogBest, 10)
  bookBlogBest = bookBlogBest.item;
  console.log(bookBlogBest);



  ejs.renderFile('./template/list.ejs', {newbookData,bookDataSpecial,bookBestseller,bookBlogBest})
  .then(data=>res.end(data))
  
})
// router.get('/', async (req, res, next) => {
//   let { ItemNewAll, ItemNewSpecial, ItemEditorChoice, Bestseller, BlogBest } = category
//   let bookData = await getBooks(ItemNewAll, 10)
//   res.json(bookData)


// })



export default router

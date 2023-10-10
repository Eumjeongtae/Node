import express from 'express';
const router = express.Router();


router.get('/', (req, res, next) => {
  res.send('users')
})
router.post('/', (req, res, next) => {
  console.log(req.body);
  res.send('users posts')
})
router.put('/:id', (req, res, next) => {
  const id = req.params.id
  res.send(`put id ==> ${id}`)
})
router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  res.send(`delete id ==> ${id}`)
})
router.use((req, res, next) => {
  res.status(404).send('File not found error!!')
})

export default router;
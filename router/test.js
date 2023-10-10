import express from 'express';
const router = express.Router();


  //GET 요청 --> http://localhost:8080/test/?keyword=bts&name=hong
  router.get('/', (req, res, next) => {
    // const keyword = req.query.keyword;
    // const name = req.query.name;
    const { keyword, name } = req.query
    res.send(`GET: /test ---> ${keyword},${name}`)
  })
  .use((req, res, next) => {
    res.status(404).send('File not found error!!')
  })

  export default router;
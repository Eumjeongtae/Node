import express from 'express';
const app = express();
const router = express.Router();


router
  .get('/',
    (req, res, next) => {
      // console.log('first');
      res.send('GET: /')
      // next();
    },
    (req, res, next) => {
      console.log('second');
    })
  .post('/', (req, res, next) => {
    res.send('POST: /')
  })
  .put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.send('PUT: /:' + id)
  })
  .delete('/:id/:name/:address', (req, res, next) => {
    // const id = req.params.id;
    // const name = req.params.name;
    // const address = req.params.address;
    const { id, name, address } = req.params
    res.send('DELETE: /:id --->> ' + id + ',' + name + ',' + address)
  })
  .use((req, res, next) => {
    res.status(404).send('File not found error!!')
  })
  export default router;
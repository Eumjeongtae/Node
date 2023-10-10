import express from 'express';
const router = express.Router();

  router.use((req, res, next) => {
    console.log(error);
    res.status(404).send('File not found error!!')
  })

  export default router;
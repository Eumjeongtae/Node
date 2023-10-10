import express from 'express'
import korea from './router/korea.js'
const app = express()

app.use('/korea',korea)

app.listen(8080);

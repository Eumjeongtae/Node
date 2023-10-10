import express from 'express'
import korea from './router/korea.js'
const app = express()
// api key = ttbdmawjdxo121911001
app.use('/korea',korea)

app.listen(8080);

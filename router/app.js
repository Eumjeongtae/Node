import express from 'express';
import route from "./route.js";
import testRouter from "./test.js";
import joinRouter from "./join.js";
const app = express();
app.use(express.json()); //body에서 넘어오는 객체를 json형태로 만들어쥼


console.log('---- start server ----');

app.use('/', route)
app.use('/test', testRouter)
app.use('/join', joinRouter)





app.listen(8080);
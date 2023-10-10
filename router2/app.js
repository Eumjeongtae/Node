import express from 'express';
import postRouter from './route/posts.js'
import usersRouter from './route/users.js'
// import errorRouter from './route/error.js'
const app = express();


console.log('---- start server ----');
app.use(express.json()); //body에서 넘어오는 객체를 json형태로 만들어쥼
app.use('/posts',postRouter)
app.use('/users',usersRouter)
// app.use('/',errorRouter)




app.listen(8080);


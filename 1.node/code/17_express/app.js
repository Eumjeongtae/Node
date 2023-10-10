const express = require('express');
const server = express();

const course = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavScript' },
  { name: 'Node' },
  { name: 'Express' },
];

console.log('--- server start~ ---');

server.get('/', (req, res) => {
  // console.log(req.headers);
  res.send('hello world~');
});

server.get('/course', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.status(200);
  res.json(course);
});

server.post('/course', (req, res) => {
  const body = []
  req
    .on('data', (chunk) => {
      body.push(chunk)
    })
    .on('end', (() => {
      course.push(JSON.parse(Buffer.concat(body).toString()))
      res.status(201).end()
    }))

})




server.listen(3300);
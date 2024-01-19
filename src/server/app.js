import express from 'express'
const server = express()
const PORT = 3333

server.get('/', function (req, res) {
  res.send('Hello World')
})

server.listen(PORT, ()=>{
  console.log(`server has been started at port: ${PORT}`)
})
import express from 'express'
const server = express()
const PORT = 3333

server.use(express.json())

server.get('/', function (req, res) {
  res.send('Hello World')
})

server.get('/files/:files/', (req, res)=>{
  try {
    const {files} = req.params
    res.send(files)
    
  } catch (error) {
    res.sendStatus(500)
  }
})

server.post('/files/', (req, res)=>{
  try {
    const asd = req.body
    res.send(asd)
  } catch (error) {
    res.sendStatus(404)
  }
})

server.listen(PORT, ()=>{
  console.log(`server has been started at port: ${PORT}`)
})
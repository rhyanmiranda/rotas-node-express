const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('app GET')
})

app.post('/', (re1, res) => {
  res.send('app POST')
})

app.delete('/', (req, res) => {
  res.send('app DELETE')
})

app.patch('/', (req, res) => {
  res.send('app PATCH')
})

app.put('/', (req, res) => {
  res.send('app PUT')
})


app.listen(PORT, () => {
  console.log(`App online na porta ${PORT}`)
})
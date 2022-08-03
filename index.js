const express = require('express')
const app = express()
const port = 3000
const host = 'localhost'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://${host}:${port}`)
})
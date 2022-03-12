const express = require('express')
const app = express()
const port = 3000

app.use(express.static('.'))

app.post('/', (req, res) => {
  res.send('success')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
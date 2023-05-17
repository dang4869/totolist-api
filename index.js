const express = require('express')
const app = express()
const db = require('./config/db')
const cors = require('cors')

const port = 3000

const route = require('./routes')
db.connect()

app.use(express.json())
app.use(cors())
// Routers init
route(app)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
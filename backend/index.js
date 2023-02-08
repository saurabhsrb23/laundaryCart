const express = require('express')
const app = express()
const port = process.env.port || 5000
require('./connectionDB.js')
require('./Order/orderModel/ordermodel')
app.use(express.json())

app.use(require('./Order/order'))

// app.use(require('./Order/pastorder'))




app.get('/', (req, res) => res.send('Hello World!'))




app.listen(port, () => console.log(` app listening on port ${port}!`))
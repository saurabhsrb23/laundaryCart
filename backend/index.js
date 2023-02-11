const express = require('express')
const app = express()
const cors = require("cors");
const PORT = 8080 || process.env.PORT;
var bodyParser = require("body-parser");
const ordersroute = require("./Order/order");
app.use(express.json());
app.use(bodyParser.json());
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
  }
  app.use(cors(corsOptions));
require('./connectionDB.js')
require('./Order/orderModel/ordermodel')
require('./Register/RegisterModel/registerModel')
app.use(express.json())

app.use(require('./Register/register'))

app.use(require('./Order/order'))

app.get('/', (req, res) => res.send('Hello World!'))


app.use("/createorder", ordersroute);

app.listen(PORT, () => console.log(` app listening on port ${PORT}!`))
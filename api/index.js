/*module.exports = (req, res) => {
  res.send('Hola mundo')
}*/
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const meals = require('./routes/meals')
const orders = require('./routes/orders')
const auth = require('./routes/auth')

const app = express()

app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

/*app.get('*', (req, res) =>{
  res.send('Chanchito feliz')
})*/

app.use('/api/meals', meals)
app.use('/api/orders', orders)
app.use('/api/auth', auth)

module.exports = app

//mongodb+srv://almuerzimaster:almuerzimaster2020@cluster0.l8khn.mongodb.net/almuerzi-db?retryWrites=true&w=majority

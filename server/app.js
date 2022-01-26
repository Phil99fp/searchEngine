const express = require('express')
const app = express()
const cors = require('cors');
// const searchData = require('./data.js')

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json('Hello World!')
})

const dataRoute = require('./dataRoute')
app.use('/birthMonth', dataRoute);


module.exports = {app};

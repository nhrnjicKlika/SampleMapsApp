const express = require('express')
const data = require('./data.js')
var cors = require('cors')

const app = express()
app.use(cors()) // allow all origins to access

app.get('/api/places', (req, res) => res.json(data))

app.listen(3001, () => console.log('Listening on port 3001!'))
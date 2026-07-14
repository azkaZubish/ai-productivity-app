const express = require('express')
const app = express()
const cors = require('cors')
const testRoute = require('./routes/test.routes')

app.use(cors({origin: "http://localhost:5173"}))
app.use(express.json())

app.use('/api', testRoute)

module.exports = app
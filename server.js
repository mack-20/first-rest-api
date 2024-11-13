const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Connect to database
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))

const subscribersRoute = require('./routes/subscribers')
app.use('/subscribers', subscribersRoute)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server Started')
    console.log(`Listening on port ${process.env.port || 3000}...`)
})
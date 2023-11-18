const express = require('express')
const app = express()
const list = require('./routes/list')
const connectDB = require('./db/connect')
require('dotenv').config()

// MIDDLEWARE
// app.use(express.static('./public'))
app.use(express.json())

// ROUTES
app.use('/api/v1/list', list)


// DATABASE AND SERVER CONNECTION

const port = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }

}

start()



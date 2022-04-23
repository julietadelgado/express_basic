// Using express object
const express = require('express')
const res = require('express/lib/response')

// Express App
const app = express()

// Port in wich we are going to see our app: localhost:3000
const port = 3000

// Initial path, this path will respond to the url localhost:300
app.get('/', (request, response) => {
    response.send('Hello world')
})

// Inititalize app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
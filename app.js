// Using express object
const express = require('express')

// Express App
const app = express()

// Port in wich we are going to see our app: localhost:3000
const port = 3000

// Initial path, this path will respond to the url localhost:3000
app.get('/', (request, response) => {
    response.send('Hello world')
})

app.get('/launchx', (req, res) => {
    res.send('Welcome to LaunchX')
})

// Send object
app.get('/explorer', (req, res) => {
    res.send({name: "Julieta", msg: "Hello everybody"})
})

// Query Params
app.get('/explorer/:explorerName', (req, res) => {
    res.send(req.params)
})

// Inititalize app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
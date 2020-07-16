//este archivo es la definicion del servidor

const express = require('express')

const app = express()

const kodersRouter = require('./routes/koders')

app.use(express.json())

//montando el router 
app.use('/koders', kodersRouter)

app.get('/', (request, response) => {
    response.json({
        succes: true,
        message: 'Kodemia APIv8'
    })
})

module.exports = app
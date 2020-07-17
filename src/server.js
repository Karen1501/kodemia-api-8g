//este archivo es la definicion del servidor

const express = require('express')

const app = express()

const kodersRouter = require('./routes/koders')
const mentoresRouter = require('./routes/mentores')
const { response } = require('express')

app.use(express.json())

//montando el router 
app.use('/koders', kodersRouter)

app.use('/mentores', mentoresRouter)

/*
app.get('/', (request, response) => {
    response.json({
        succes: true,
        message: 'Kodemia APIv8'
    })
})

app.get('/', (request, response) => {
    response.json({
        succes: true,
    })
})
*/
module.exports = app
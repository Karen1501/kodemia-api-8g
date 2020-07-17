// Este archivo debe poner en marcha la app
require('dotenv').config() //forma corta y mas usada iniciar dotenv

const dbConnect = require('./src/lib/db')
const server = require('./src/server')

dbConnect()
    .then(() => {
        console.log('DB connected')
        server.listen(8080, () => {
            console.log('server is listening')
        })
    })
    .catch(error => {
        console.error('Error:', error)
    })
// funciones , verbos 
//las acciones que el usuario puede ejercer en el sistema

const Koders = require('../models/koder') // ruta relativa 
const { connect } = require('mongoose')
    //no usar rutas relativas
    //reuta absoluta const Koders = require('/Users/Koder/Documents/code/kodemia-api-oct/src/models/koder')

function getAll() {
    return Koders.find()
}
//const allFunctions = {se crea olbjeto
//llave : get all 
//}

function create(koderData) {
    return Koders.create(koderData)
}

function update(koderData) {
    return Koders.update(koderData)
}



module.exports = {
    getAll,
    create,
    update
}
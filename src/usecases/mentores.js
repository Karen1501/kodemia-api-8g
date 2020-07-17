const Mentores = require('../models/mentor') // ruta relativa 
const { connect } = require('mongoose')

function getAllMentor() {
    return Mentores.find()
}

function createMentor(mentorData) {
    return Mentores.create(mentorData)
}

function updateMentor(id, data) {
    return Mentores.findByIdAndUpdate(id, data)
}

function deleteMentor(id) {
    return Mentores.findByIdAndRemove({ _id: id })
}

module.exports = {
    getAllMentor,
    createMentor,
    updateMentor,
    deleteMentor
}
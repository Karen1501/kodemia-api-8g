const express = require('express')

const router = express.Router()
    //un router es conjunto o subconjunto de rutas
    //funciona basicamente como lo hace app

const koders = require('../usecases/koders')
const mentor = require('./mentores')

router.get('/', async(request, response) => {
    try {
        const allKoders = await koders.getAll()
        response.json({
            succes: true,
            data: {
                koders: allKoders
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            succes: false,
            error: error.message
        })
    }
})
router.post('/', async(request, response) => {
    try {
        const newKoderData = request.body
        const newKoder = await koders.create(newKoderData)
        response.json({
            succes: true,
            data: {
                newKoder
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            succes: false,
            error: error.message
        })
    }
})

router.patch('/:id', async(request, response) => {
    try {
        const newKoderData = request.body
        const idKoder = request.params.id
        const newKoder = await koders.update(idKoder, newKoderData)
        response.json({
            succes: true,
            data: {
                newKoder
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            succes: false,
            error: error.message
        })
    }
})

router.delete('/:id', async(request, response) => {
    try {
        const deleteKoderId = request.params.id
        const koderDelete = await koders.deleteKoder(deleteKoderId)
        response.json({
            succes: true,
            data: {
                koderDelete
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            succes: false,
            error: error.message
        })
    }
})

module.exports = router
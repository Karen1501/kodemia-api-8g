const express = require('express')

const router = express.Router()
    //un router es conjunto o subconjunto de rutas
    //funciona basicamente como lo hace app

const koders = require('../usecases/koders')

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

router.patch('/', async(request, response) => {
    try {
        const newKoderData = request.body
        const newKoder = await koders.update(newKoderData)
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

module.exports = router
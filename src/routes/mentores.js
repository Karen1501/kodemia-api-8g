const express = require('express')

const router = express.Router()
    //un router es conjunto o subconjunto de rutas
    //funciona basicamente como lo hace app

const mentors = require('../usecases/mentores')

router.get('/', async(request, response) => {
    try {
        const allMentors = await mentors.getAllMentor()
        response.json({
            succes: true,
            data: {
                mentors: allMentors
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
        const newMentorData = request.body
        const newMentor = await mentors.createMentor(newMentorData)
        response.json({
            succes: true,
            data: {
                newMentor
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
        const newMentorData = request.body
        const id = request.params.id
        const mentor = await mentors.updateMentor(id, newMentorData)
        response.json({
            succes: true,
            data: {
                mentor
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
        const deleteId = request.params.id
        const mentorDelete = await mentors.deleteMentor(deleteId)
        response.json({
            succes: true,
            data: {
                mentorDelete
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
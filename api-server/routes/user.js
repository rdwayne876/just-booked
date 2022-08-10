const express = require('express')
const { find, findOne, update, deleteOne, findAppointments } = require('../controllers/userController')
const router = express('router')

router.route('/').get(find)

router.route('/:id')
    .get(findOne)
    .patch(update)
    .delete(deleteOne)

router.route('/:id/appointments').get(findAppointments)



module.exports = router
const express = require('express')
const { find, findOne, update, deleteOne, findService, findAppointments} = require('../controllers/providerController')
const router = express('router')

router.route('/').get(find)

router.route('/:id')
    .get(findOne)
    .patch(update)
    .delete(deleteOne)

router.route('/:id/services').get(findService)
router.route('/:id/appointments').get(findAppointments)

module.exports = router
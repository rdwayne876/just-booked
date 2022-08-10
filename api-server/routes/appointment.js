const express =  require( 'express')
const { create, find, findOne, update, deleteOne, book } = require('../controllers/appointmentController')
const router = express('router')

router.route('/').post(book)
                .get(find)

router.route('/:id').get(findOne)
                .patch(update)
                .delete(deleteOne)

module.exports = router
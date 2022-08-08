const express = require('express')
const { find, findOne, update, deleteOne } = require('../controllers/userController')
const router = express('router')

router.route('/').get(find)

router.route('/:id')
    .get(findOne)
    .patch(update)
    .delete(deleteOne)


module.exports = router
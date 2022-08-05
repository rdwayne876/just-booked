const express = require('express')
const { find, findOne, update, deleteOne} = require('../controllers/providerController')
const router = express('router')

router.route('/').get(find)

router.route('/:id')
    .get(findOne)
    .patch(update)
    .delete(deleteOne)

module.exports = router
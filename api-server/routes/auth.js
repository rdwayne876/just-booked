const express =  require( 'express')
const { register } = require('../controllers/authController')
const router = express('router')

// router.route('/login').get(login)
router.route('/register').post(register)

module.exports = router
const express =  require( 'express')
const { register, login } = require('../controllers/authController')
const router = express('router')

router.route('/register').post(register)
router.route('/login').post(login)

module.exports = router
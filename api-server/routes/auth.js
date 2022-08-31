const express =  require( 'express')
const { register, login, refresh, logout, authTest } = require('../controllers/authController')
const { validateToken } = require('../middlewares/auth')
const router = express('router')

router.route('/register/:type').post(register)
router.route('/login').post(login)
// router.route( '/refreshToken').post(refresh)
// router.route('/logout').delete(logout)
// router.route('/test', validateToken).get(( req, res) => {
//     console.log( "Valid token");
//     console.log( req.user.firstName);
//     res.send( `${req.user.name} accessed protected route`)
// })
router.route('/test', validateToken).get( authTest)

// router.get("/test", validateToken, (req, res) => {
//     console.log( "Valid token");
//     console.log( req.user.firstName);
//     res.send( `${req.user.firstName} accessed protected route`)
// })

module.exports = router
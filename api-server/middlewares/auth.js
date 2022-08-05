const jwt = require( 'jsonwebtoken')

exports.validateToken = ( req, res, next ) => {
    // get token from request headers
    const  authHeader = req.headers[ "authorization"]
    const token = authHeader.split( " " )[1]

    if( token == null) {
        res.status( 400).json({
            status: "Failed",
            message: "Token not found"
        })
    }

    jwt.verify( token, process.env.ACCESS_TOKEN_SECRET, ( err, user) => {
        if( err ) {
            res.status( 403 ).json({
                status: "Failed",
                message: "Invalid access token"
            })
        } else{
            req.user = user
            next()
        }
    })
}
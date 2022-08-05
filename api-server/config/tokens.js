const jwt = require('jsonwebtoken');

const refreshTokens = []

exports.refreshTokens = refreshTokens

exports.createAccessToken = function( user){
    return jwt.sign( user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
}

exports.createRefreshToken = function( user) {
    const refreshToken = jwt.sign( user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '20m'})
    refreshTokens.push(refreshToken)
    return refreshToken
}
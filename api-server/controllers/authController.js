const Provider = require('../models/providers')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)
const jwt = require('jsonwebtoken')
const { createAccessToken, createRefreshToken, refreshTokens } = require('../config/tokens')
const { registerValidation } = require('../validation')

exports.register = async (req, res) => {
    try {

        // Validate user info
        const { error } = registerValidation(req.body)
        if (error) return res.status(400).send(error.details[0].message)

        if (req.params.type === 'provider') {
            // Deconstructor gets user input
            const { firstName, lastName, email, password, phone } = req.body

            //check if provider already exists
            const oldProvider = await Provider.findOne({ email })

            if (oldProvider) {
                return res.status(409).json({
                    status: "Failed",
                    message: "User already exists. Please login"
                })
            }

            //Hash password w/ bcrypt
            encryptedPassword = await bcrypt.hash(password, salt)

            //create provider in db
            const provider = await Provider.create({
                firstName,
                lastName,
                email: email.toLowerCase(), // Sanitize: converst email to lowercase
                password: encryptedPassword,
                phone
            })

            //create access token
            const accessToken = createAccessToken({ user: provider.email })

            //create refresh token
            const refreshToken = createRefreshToken()

            //save provider tokens
            provider.accessToken = accessToken
            provider['refreshToken'].push(refreshToken)

            //return created provider
            res.status(201).json({
                status: "Success",
                data: {
                    provider,
                    accessToken,
                    refreshToken
                }
            })
        }

        if (req.params.type === 'user') {
            // Deconstructor gets user input
            const { firstName, lastName, email, password, phone } = req.body

            // Validate user input
            if (!(email && password && firstName && lastName && phone)) {
                res.status(400).json({
                    status: "Failed",
                    message: "All fields are required"
                })
            }

            //check if provider already exists
            const oldUser = await User.findOne({ email })

            if (oldUser) {
                return res.status(409).json({
                    status: "Failed",
                    message: "User already exists. Please login"
                })
            }

            //Hash password w/ bcrypt
            encryptedPassword = await bcrypt.hash(password, salt)

            //create user in db
            const user = await User.create({
                firstName,
                lastName,
                email: email.toLowerCase(), // Sanitize: converst email to lowercase
                password: encryptedPassword,
                phone
            })

            //create access token
            const accessToken = createAccessToken({ user: user.email })

            //create refresh token
            const refreshToken = createRefreshToken()

            //save user tokens
            user.accessToken = accessToken
            user['refreshToken'].push(refreshToken)

            //return created provider
            res.status(201).json({
                status: "Success",
                data: {
                    user,
                    accessToken,
                    refreshToken
                }
            })
        }

    } catch (err) {
        console.error(err);
    }
}

exports.login = async (req, res) => {
    try {
        //Deconstructor gets user input
        const { email, password } = req.body

        //validate user input
        if (!(email && password)) {
            res.status(400).json({
                status: "Failed",
                message: "All fields are required"
            })
        }

        // validate if user exists
        const provider = await Provider.findOne({ email })

        // check for user and if passwords match
        if (provider && (await bcrypt.compare(password, provider.password))) {
            //create access token
            const accessToken = jwt.sign(
                { user: provider._id },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "120m" }
            )

            //create refresh token 
            const refreshToken = jwt.sign(
                { provider_id: provider._id },
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: "20m" }

            )

            //save provider tokens
            // provider.accessToken = accessToken
            // provider.refreshToken.push(refreshToken)

            // updateProvider = provider.save({ new: true })

            //return created provider
            res.status(201).json({
                status: "Success",
                data: {
                    provider,
                    accessToken,
                    refreshToken
                }
            })
        }

        // return error message if user not found || password mismatch
        res.status(400).json({
            status: "Failed",
            message: "Invalid credentials"
        })

    } catch (err) {
        console.error(err);
    }
}

exports.refresh = async (req, res) => {

    //check if refresh token is valid
    if (!refreshTokens.includes(req.body.token)) {
        res.status(400).json({
            status: "Failed",
            message: "Invalid refresh token"
        })
    }
    // remove old refresh token from the refresh tokens list
    refreshTokens = refreshTokens.filter((token) => token != req.body.token)

    // genereate new access and refresh tokens
    const accessToken = createAccessToken
    const refreshToken = createRefreshToken

    // Return new tokens
    res.status(200).json({
        accessToken: accessToken,
        refreshToken: refreshToken
    })

}

exports.logout = async (req, res) => {

    try {
        // remove the refresh token from the refresh tokens list
        refreshTokens = refreshTokens.filter((token) => token != req.body.token)
    } catch (error) {
        console.error(error);
    }

}

exports.authTest = async (req, res) => {

    try {
        console.log("Valid Token");
        console.log(req.user.user);
        res.send(`${req.user.user} successfully accessed test route`)
    } catch (error) {
        console.error(error);
    }

}

exports.account = async (req, res) => {
    try {

        const user = await Provider.findById(req.user.user).populate("appointments").populate("services")

        res.status(201).json({
            status: "Success",
            data: {
                user
            }
        })

    } catch (error) {
        console.error(error)
    }
}
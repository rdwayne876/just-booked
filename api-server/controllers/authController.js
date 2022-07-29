const express = require( 'express')
const Provider = require( '../models/providers')
const bcrypt = require( 'bcryptjs')
const salt = bcrypt.genSaltSync(10)
const jwt = require( 'jsonwebtoken')
const { userInfo } = require('os')

exports.register = async( req, res) => {
    try {
        // Deconstructor gets user input
        const { firstName, lastName, email, password, phone} = req.body

        // Validate user input
        if(!(email && password && firstName && lastName && phone)) {
            res.status(400).json({
                status: "Failed", 
                message: "All fields are required"
            })
        }

        //check if provider already exists
        const oldProvider = await Provider.findOne({ email})

        if( oldProvider)  {
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

        //create token
        const token = jwt.sign(
            {provider_id: provider._id, email},
            process.env.TOKEN_KEY,
            {expiresIn: "2h"}
        )

        //save provider token
        provider.token = token

        //return created provider
        res.status(201).json({
            status: "Success",
            data: {
                provider
            }
        })

    } catch ( err) {
        console.error( err);
    }
}

exports.login = async( req, res) => {
    try{
        //Deconstructor gets user input
        const { email, password} = req.body

        //validate user input
        if( !(email && password)) {
            res.status(400).json({
                status: "Failed",
                message: "All fields are required"
            })
        }

        // validate if user exists
        const provider = await Provider.findOne({ email})

        // check for user and if passwords match
        if( provider && ( await bcrypt.compare(password, provider.password))) {
           //create token
            const token = jwt.sign(
                {provider_id: provider._id, email},
                process.env.TOKEN_KEY,
                {expiresIn: "2h"}
            )

            //save user token
            provider.token = token

            //provider
            res.status( 200).json({
                message: "Success",
                data: {
                    provider
                }
            })
        }

        // return error message if user not found || password mismatch
        res.status( 400).json({
            status: "Failed",
            message: "Invalid credentials"
        })

    } catch ( err){
        console.error( err);
    }
}
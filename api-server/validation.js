const Joi = require('@hapi/joi')

const registerValidation =  data => {
    const schema = {
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        passphoneword: Joi.string().min(10).max(10).required()
    }

    return Joi.validate( data, schema)
}

const loginValidation =  data => {
    const schema = {
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    }

    return Joi.validate( data, schema)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation

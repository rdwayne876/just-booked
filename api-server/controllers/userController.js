const User = require('../models/user')

exports.find = async( req, res) => {
    try {
        // get all users
        const users = await User.find()

        // return all users
        res.status(200).json({
            status: 'Success',
            data: {
                users
            }
        })

    } catch (error) {
        console.error( error);
    }
}

exports.findOne = async( req, res) => {
    try {
        // get one user by id
        const user = await User.findOne({ _id: req.params.id });

        //check if the user exists
        if (!user) {
            res.status(404).json({
                status: 'Error',
                message: 'User not found'
            })
        } 

        // return the user
        res.status(200).json({
            status: 'Success',
            data: {
                user
            }
        })
        
    } catch (error) {
        console.error( error);
    }
}

exports.update = async( req, res) => {
    try {
        // update user, finding user by id
        const user = await User.findByIdAndUpdate(req.params.id, req.body) 

        // check if the user exists
        if (!user) {
            res.status(404).json({
                status: 'Error',
                message: 'User not found'
            })
        }

        user.save({ new: true})

        res.status(200).json({
            status: 'Success',
            data: {
                user
            }
        })
    } catch (error) {
        console.error( error);
    }
}

exports.deleteOne = async( req, res) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.id });

        if( !user){
            res.status(404).json({
                status: 'Error',
                message: 'User not found'
            })
        }

        res.status( 200).json({
            status: 'Success',
            data: {
                user
            }
        })
    } catch (error) {
        console.error( error);
    }
}



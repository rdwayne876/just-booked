const Provider = require('../models/providers')
const Service = require('../models/service')

exports.find = async( req, res) => {
    try {
        // get all providers
        const providers = await Provider.find()

        // return all providers
        res.status(200).json({
            status: 'Success',
            data: {
                providers
            }
        })

    } catch (error) {
        console.error( error);
    }
}

exports.findOne = async( req, res) => {
    try {
        // get one provider by id
        const provider = await Provider.findOne({ _id: req.params.id });

        //check if the provider exists
        if (!provider) {
            res.status(404).json({
                status: 'Error',
                message: 'Provider not found'
            })
        } 

        // return the provider
        res.status(200).json({
            status: 'Success',
            data: {
                provider
            }
        })
        
    } catch (error) {
        console.error( error);
    }
}

exports.update = async( req, res) => {
    try {
        // update provider, finding provider by id
        const provider = await Provider.findByIdAndUpdate(req.params.id, req.body) 

        // check if the provider exists
        if (!provider) {
            res.status(404).json({
                status: 'Error',
                message: 'Provider not found'
            })
        }

        provider.save({ new: true})

        res.status(200).json({
            status: 'Success',
            data: {
                provider
            }
        })
    } catch (error) {
        console.error( error);
    }
}

exports.deleteOne = async( req, res) => {
    try {
        const provider = await Provider.findOneAndDelete({ _id: req.params.id });

        if( !provider){
            res.status(404).json({
                status: 'Error',
                message: 'Provider not found'
            })
        }

        res.status( 200).json({
            status: 'Success',
            data: {
                provider
            }
        })
    } catch (error) {
        console.error( error);
    }
}

exports.findService = async( req, res) => {
    try{
        // get services of the provider
        const services = await Provider.findById(req.params.id).populate("services")
            .select('-_id -firstName -lastName -email -password -phone -refreshToken -appointments -__v -updatedAt')

        //return services
        return res.status(200).json({
            success: true,
            message: 'Services found successfully',
            data: {
                services
            }
        })
    } catch( err){
        console.error( err)
    }
}

exports.findAppointments = async( req, res) => {
    try{
        const appointments = await Provider.findById(req.params.id).populate("appointments")
            .select('-_id -firstName -lastName -email -password -phone -refreshToken -services -__v -updatedAt')

        return res.status(200).json({
            success: true,
            message: 'Appointments found successfully',
            data: {
                appointments
                }
            })
    } catch( err) {
        console.error( err)

    }
}

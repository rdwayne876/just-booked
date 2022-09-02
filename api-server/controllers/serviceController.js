const Service = require('../models/service')
const Provider = require('../models/providers')

exports.create = async( req, res) => {
    try{
        //get service data from deconstructor
        const { name, description, imageUrl, category, cost, time, provider} = req.body

        //create the service
        const service = await Service.create({
            name, 
            description,
            imageUrl,
            category,
            cost,
            time,
            provider,  
        })

        const serviceProvider = await Provider.findById(provider)

        serviceProvider['services'].push(service._id)

        serviceProvider.save()

        //send back the response
        res.status( 201).json({
            success: true,
            message: 'Service Created Successfully',
            data: {
                service
            }
        })
    } catch( err){
        console.error( err)
    }
}

exports.find = async( req, res) => {
    try{
        //get all services from db
        const services = await Service.find()

        //return all services
        res.status( 200).json({
            success: true,
            message: 'Services found',
            data: {
                services
            }
        })
    } catch( err){
        console.error( err)
    }
}

exports.findOne = async( req, res) =>{
    try{
        //use param id to find servcie
        const service = await Service.findById(req.params.id)

        //check if service exists
        if( !service){
            res.status( 404).json({
                success: false,
                message: 'Service Not Found',
            })
        }

        // return the service
        res.status( 200).json({
            success: true,
            message: 'Service Found',
            data: {
                service
            }
        })
    } catch( err){
        console.error( err)
    }
}

exports.update = async( req, res) => {
    try{
        // update provider, finding provider by id
        const service = await Service.findByIdAndUpdate(req.params.id, req.body) 

        // check if the provider exists
        if (!service) {
            res.status(404).json({
                success: false,
                message: 'Service Not Found'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Service updated successfully',
            data: {
                service
            }
        })
    } catch( err){
        console.error( err)

    }
}

exports.deleteOne = async( req, res) => {
    try {
        //find and delete service
        const service = await Service.findOneAndDelete({ _id: req.params.id });

        if( !service){
            res.status(404).json({
                success: false,
                message: 'Service Not Found'
            })
        }

        res.status( 200).json({
            success: true,
            message: 'Service deleted successfully',
            data: {
                service
            }
        })
    } catch (error) {
        console.error( error);
    }
}
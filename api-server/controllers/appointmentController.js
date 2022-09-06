const { addMinutes, subMinutes } = require('date-fns')
const Appointment = require('../models/appointment')
const Provider = require('../models/providers')
const Service = require('../models/service')
const User = require('../models/user')

exports.book = async (req, res) => {
    try {
        //get appointment data from deconstructor
        const { user, provider, date, services } = req.body


        // Check if provider has another appointment during time
        // Get total servcie tim
        let totalTime = 0
        services.forEach(async service => {
            service = await Service.findById(service)
            totalTime += service.time
            console.log(time);
        });

        //Get appointment start and end times with 10minutes buffer
        const startTime = subMinutes(new Date(date), 10)
        const endTime = addMinutes(new Date(date), (totalTime + 10))

        // Query db for exsiting appointment during new suggested appointment time
        const oldAppointment = await Appointment.find({ provider: provider, date: { $gte: startTime }, date: { $lte: endTime } }).exec()

        //If appointment exists return error
        if (oldAppointment.length != 0) {
            return res.status(409).json({
                status: "Failed",
                message: "Appointment already exists. Please Pick another time"
            })
        }

        //create the appointment
        const appointment = await Appointment.create({
            user,
            provider,
            date,
            services,
        })

        //save appointment on provider document
        const providerAppointment = await Provider.findById(provider)

        providerAppointment['appointments'].push(appointment._id)

        providerAppointment.save()

        //save appoint on user document
        const userAppointment = await User.findById(user)

        userAppointment['appointments'].push(appointment._id)

        userAppointment.save()

        //send back the response
        res.status(201).json({
            success: true,
            message: 'Appointment Created Successfully',
            data: {
                appointment
            }
        })
    } catch (err) {
        console.error(err)
    }
}

exports.find = async (req, res) => {
    try {
        //get all appointments from db
        const appointments = await Appointment.find()

        //return all appointments
        res.status(200).json({
            success: true,
            message: 'Appointments found',
            data: {
                appointments
            }
        })
    } catch (err) {
        console.error(err)
    }
}

exports.findOne = async (req, res) => {
    try {
        //use param id to find servcie
        const appointment = await Appointment.findById(req.params.id)

        //check if appointment exists
        if (!appointment) {
            res.status(404).json({
                success: false,
                message: 'Appointment Not Found',
            })
        }

        // return the appointment
        res.status(200).json({
            success: true,
            message: 'Appointment Found',
            data: {
                appointment
            }
        })
    } catch (err) {
        console.error(err)
    }
}

exports.update = async (req, res) => {
    try {

        // Get total servcie tim
        let totalTime = 0
        req.body.services.forEach(async service => {
            service = await Service.findById(service)
            totalTime += service.time
            console.log(time);
        });

        //Get appointment start and end times with 10minutes buffer
        const startTime = subMinutes(new Date(req.body.date), 10)
        const endTime = addMinutes(new Date(req.body.date), (totalTime + 10))

        // Query db for exsiting appointment during new suggested appointment time
        const oldAppointment = await Appointment.find({ provider: req.body.provider, date: { $gte: startTime }, date: { $lte: endTime } }).exec()

        //If appointment exists return error
        if (oldAppointment.length != 0) {
            return res.status(409).json({
                status: "Failed",
                message: "Appointment already exists. Please Pick another time"
            })
        }
        // update provider, finding provider by id
        const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body)

        // check if the provider exists
        if (!appointment) {
            res.status(404).json({
                success: false,
                message: 'Appointment Not Found'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Appointment updated successfully',
            data: {
                appointment
            }
        })
    } catch (err) {
        console.error(err)

    }
}

exports.deleteOne = async (req, res) => {
    try {
        //find and delete appointment
        const appointment = await Appointment.findOneAndDelete({ _id: req.params.id });

        if (!appointment) {
            res.status(404).json({
                success: false,
                message: 'Appointment Not Found'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Appointment deleted successfully',
            data: {
                appointment
            }
        })
    } catch (error) {
        console.error(error);
    }
}
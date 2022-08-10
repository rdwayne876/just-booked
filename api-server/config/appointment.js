const Provider = require( '../models/providers')
const User = require( '../models/user')

exports.providerAppointment = function( account){
    const accountAppointment = await Provider.findById(account)

    accountAppointment['appointments'].push(appointment._id)

    accountAppointment.save()
}

exports.userAppointment = function( account) {
    const accountAppointment = await User.findById(account)

    accountAppointment['appointments'].push(appointment._id)

    accountAppointment.save()
}
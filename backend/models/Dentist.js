const mongoose = require('mongoose')

const dentistSchema = new mongoose.Schema({
   name: {type: String, required: true},
   image: {type: String},
   qualification: {type: String, required: true},
   email: {type: String, required: true, unique: true, lowercase: true, trim: true ,match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please use a valid email address"]},
   phone: {type: Number},
   experience: {type:Number, required: true},
   clinicName: {type: String, required: true},
   address: {type:String, required: true},
   availableDays: []
}, {timestamps: true})

const Dentist = mongoose.model('Dentist', dentistSchema)
module.exports = Dentist
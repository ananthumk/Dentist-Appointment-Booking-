const mongoose =  require('mongoose')

const appointmentSchema = new mongoose.Schema({
   dentistId: {type: mongoose.Schema.Types.ObjectId, ref: 'Dentist'},
   patientName: String,
   age: Number,
   gender: String,
   email: String,
   phone: Number,
   appointmentDate: Date 
}, {timeStamps: true})

const Appointment = new mongoose.model('Appointment', appointmentSchema)
module.exports = Appointment
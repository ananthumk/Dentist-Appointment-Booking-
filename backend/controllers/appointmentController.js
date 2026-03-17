import Appointment from '../models/Appointment'

const postAppointment = async (req, res) => {
    try {
        const {dentistId, name, age, phone, gender, email, appointmentDate } = req.body 

        const appointment = await Appointment.create({
            dentistId,
            patientName: name, 
            age,
            gender,
            email,
            phone,
            appointmentDate
        })

        res.status(201).json({message: 'Appointment booked'})
    } catch (error) {
        console.log('Error at post appointment: ', error.message)
        res.status(500).json({message: error.message})
    }
}

const getAllAppointment = async (req, res) => {
    try {
        const appointments = await Appointment.findAll()
        res.status(200).json({appointments})
    } catch (error) {
        console.log('Error at get all appointment: ', error.message)
        res.status(500).json({message: error.message})
    }
}

exports.module = {postAppointment, getAllAppointment}
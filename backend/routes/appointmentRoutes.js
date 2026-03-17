const express = require('express')
const appointmentRouter = express.Router()
import {postAppointment,getAllAppointment} from '../controllers/appointmentController'

appointmentRouter.post('/', postAppointment)
appointmentRouter.get('/', getAllAppointment)

module.exports = appointmentRouter
const express = require('express')
const connectDb = require('./database/db')
const app = express()

const dentistRouter = require('./models/Dentist')
const appointmentRouter = require('./models/Appointment')

require('dotenv').config()

connectDb()

const PORT = process.env.PORT || 5000

app.use(express.json())

app.use('/api/dentist', dentistRouter)
app.use('/api/appointment', appointmentRouter)

app.listen(PORT, () => console.log(`Server connected to http://localhost:${PORT}`))
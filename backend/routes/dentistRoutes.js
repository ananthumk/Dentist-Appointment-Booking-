const express = require('express')
const dentistRouter = express.Router()
import {getDentistDetails, updateDentist, addDentist, deleteDentist} from '../controllers/dentisitController'

dentistRouter.get('/', getDentistDetails)
dentistRouter.post('/', addDentist)
dentistRouter.put('/id', updateDentist)
dentistRouter.delete('/id', deleteDentist)

module.exports = dentistRouter
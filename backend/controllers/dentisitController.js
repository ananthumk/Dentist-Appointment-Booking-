import Dentist from '../models/Dentist'

const getDentistDetails = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 0
        const limit = parseInt(req.query.limit) || 10
        const search = req.query.search || ''

        const skip = (page - 1) * limit

        const searchFilter = {
            $or: [
                { name: { $regex: search, $options: "i" } },
                { address: { $regex: search, $options: "i" } },
                { clinicName: { $regex: search, $options: "i" } },
                { email: { $regex: search, $options: "i" } }
            ]
        }



        const dentists = await Dentist.find(search ? searchFilter : {}).skip(skip).limit(limit)

        const total = await Dentist.countDocuments(search ? searchFilter : {})

        if (!dentists) {
            return res.status(404).json({ message: 'No Dentist is found' })
        }

        res.status(200).json({
            total,
            page,
            totalPages: Math.ceil(total / limit),
            dentists
        })
    } catch (error) {
        console.log('Error on get dentist details: ', error.message)
        res.status(500).json({ message: error.message })
    }
}

const addDentist = async (req, res) => {
    try {
        const { name, image, qualification, email, phone, experience, clinicName, address } = req.body

        const dentist = await Dentist.create({
            name,
            image,
            qualification,
            email,
            phone,
            experience,
            clinicName,
            address
        })

        res.status(201).json({ message: 'Dentist created Successfully', dentist })
    } catch (error) {
        console.log('Error at add Dentist: ', error.message)
        res.status(500).json({ message: error.message })
    }
}

const updateDentist = async (req, res) => {
    try {
        const { id } = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid dentist id' })
        }

        const updateData = req.body

        const allowedUpdates = ['name', 'image', 'qualification', 'phone', 'experience', 'clinicName', 'address', 'availableDays']

        const filteredUpdates = {}

        allowedUpdates.forEach(field => {
            if (updateData[field] !== undefined) {
                filteredUpdates[field] = updateData[field]
            }
        })

        const dentist = await Dentist.findByIdAndUpdate(
            id,
            { $set: filteredUpdates },
            {
                new: true,  
                runValidators: true  
            }
        )

        if (!dentist) {
            return res.status(404).json({ message: 'Dentist Not found' })
        }

        res.status(200).json({
            message: 'Dentist updated successfully',
            dentist
        })
    } catch (error) {
        console.log('Error at update dentist: ', error.message)
        res.status(500).json({ message: error.message })
    }
}

const deleteDentist = async (req, res) => {
    try {
        const { id } = req.params

        const dentist = await Dentist.findById(id)

        if (!dentist) {
            return res.status(404).json({ message: 'Dentist not found' })
        }

        const deletedDentist = await Dentist.findByIdAndDelete(id)

        res.status(200).json({ message: 'Dentist details deleted', deletedDentist })
    } catch (error) {
        console.log('Error on delete dentist: ', error.message)
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getDentistDetails, addDentist, updateDentist, deleteDentist }
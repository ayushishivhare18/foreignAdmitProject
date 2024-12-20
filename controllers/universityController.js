const University = require('../models/University');

// Get all universities
exports.getAllUniversities = async (req, res) => {
    try {
        const universities = await University.find();
        res.status(200).json({ success: true, data: universities });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching universities', error });
    }
};

// Get a single university by ID
exports.getUniversityById = async (req, res) => {
    const { id } = req.params;
    try {
        const university = await University.findById(id);
        if (!university) {
            return res.status(404).json({ success: false, message: 'University not found' });
        }
        res.status(200).json({ success: true, data: university });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching university', error });
    }
};

// Create a new university
exports.createUniversity = async (req, res) => {
    const { name, country } = req.body; // Assuming each university has a name and country
    try {
        const newUniversity = new University({ name, country });
        await newUniversity.save();
        res.status(201).json({ success: true, data: newUniversity });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error creating university', error });
    }
};

// Update an existing university
exports.updateUniversity = async (req, res) => {
    const { id } = req.params;
    const { name, country } = req.body;
    try {
        const updatedUniversity = await University.findByIdAndUpdate(
            id,
            { name, country },
            { new: true } // Return the updated document
        );
        if (!updatedUniversity) {
            return res.status(404).json({ success: false, message: 'University not found' });
        }
        res.status(200).json({ success: true, data: updatedUniversity });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error updating university', error });
    }
};

// Delete a university
exports.deleteUniversity = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUniversity = await University.findByIdAndDelete(id);
        if (!deletedUniversity) {
            return res.status(404).json({ success: false, message: 'University not found' });
        }
        res.status(200).json({ success: true, message: 'University deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting university', error });
    }
};

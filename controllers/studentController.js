const Student = require('../models/Student'); 
const University = require('../models/University');
const Bank = require('../models/Bank');

// Get all students
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find().populate('selectedUniversities.universityId').populate('selectedUniversities.banks');
        res.status(200).json({ success: true, data: students });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching students', error });
    }
};

// Get a single student
exports.getStudentById = async (req, res) => {
    const { id } = req.params;
    try {
        const student = await Student.findById(id)
            .populate('selectedUniversities.universityId')
            .populate('selectedUniversities.banks');
        if (!student) {
            return res.status(404).json({ success: false, message: 'Student not found' });
        }
        res.status(200).json({ success: true, data: student });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching student', error });
    }
};

// Create a new student
exports.createStudent = async (req, res) => {
    const { name, email } = req.body;
    try {
        const newStudent = new Student({ name, email });
        await newStudent.save();
        res.status(201).json({ success: true, data: newStudent });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error creating student', error });
    }
};

// Update student's selections
exports.updateStudentSelections = async (req, res) => {
    const { id } = req.params;
    const { selectedUniversities } = req.body; // Format: [{ universityId, banks: [bankId1, bankId2] }]
    try {
        const student = await Student.findById(id);
        if (!student) {
            return res.status(404).json({ success: false, message: 'Student not found' });
        }

        student.selectedUniversities = selectedUniversities; // Replace with new selections
        await student.save();

        res.status(200).json({ success: true, data: student });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error updating selections', error });
    }
};

// Delete a student
exports.deleteStudent = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedStudent = await Student.findByIdAndDelete(id);
        if (!deletedStudent) {
            return res.status(404).json({ success: false, message: 'Student not found' });
        }
        res.status(200).json({ success: true, message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting student', error });
    }
};

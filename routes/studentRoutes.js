const express = require('express');
const router = express.Router();

const {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
} = require('../controllers/studentController');

//To fetch all students
router.get('/', getAllStudents);

//To fetch a student by ID
router.get('/:id', getStudentById);

//To create a new student
router.post('/', createStudent);

//To update a student's information
router.put('/:id', updateStudent);

//To delete a student
router.delete('/:id', deleteStudent);

module.exports = router;

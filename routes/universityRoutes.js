const express = require('express');
const router = express.Router();
const {
    getAllUniversities,
    getUniversityById,
    createUniversity,
    updateUniversity,
    deleteUniversity,
} = require('../controllers/universityController');

//To get all universities
router.get('/', getAllUniversities);

//To get a specific university by ID
router.get('/:id', getUniversityById);

//To create a new university
router.post('/', createUniversity);

//To update an existing university
router.put('/:id', updateUniversity);

//To delete a university
router.delete('/:id', deleteUniversity);

module.exports = router;


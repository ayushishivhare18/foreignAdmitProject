const express = require('express');
const router = express.Router();
const {
    getAllBanks,
    getBankById,
    createBank,
    updateBank,
    deleteBank,
} = require('../controllers/bankController');

//To get all banks
router.get('/', getAllBanks);

//To get a specific bank by ID
router.get('/:id', getBankById);

//To create a new bank
router.post('/', createBank);

//To update an existing bank
router.put('/:id', updateBank);

//To delete a bank
router.delete('/:id', deleteBank);

module.exports = router;

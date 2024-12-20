const Bank = require('../models/Bank');

// Fetch all banks
exports.getAllBanks = async (req, res) => {
    try {
        const banks = await Bank.find();
        res.status(200).json(banks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching banks', error });
    }
};

// Fetch a specific bank by ID
exports.getBankById = async (req, res) => {
    try {
        const { id } = req.params;
        const bank = await Bank.findById(id);
        if (!bank) {
            return res.status(404).json({ message: 'Bank not found' });
        }
        res.status(200).json(bank);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bank', error });
    }
};

// Create a new bank
exports.createBank = async (req, res) => {
    try {
        const { name, location } = req.body;
        const newBank = new Bank({ name, location });
        await newBank.save();
        res.status(201).json(newBank);
    } catch (error) {
        res.status(500).json({ message: 'Error creating bank', error });
    }
};

// Update an existing bank
exports.updateBank = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, location } = req.body;
        const updatedBank = await Bank.findByIdAndUpdate(id, { name, location }, { new: true });
        if (!updatedBank) {
            return res.status(404).json({ message: 'Bank not found' });
        }
        res.status(200).json(updatedBank);
    } catch (error) {
        res.status(500).json({ message: 'Error updating bank', error });
    }
};

// Delete a bank
exports.deleteBank = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBank = await Bank.findByIdAndDelete(id);
        if (!deletedBank) {
            return res.status(404).json({ message: 'Bank not found' });
        }
        res.status(200).json({ message: 'Bank deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting bank', error });
    }
};

const mongoose = require('mongoose');
const University = require('./models/University');
const Bank = require('./models/Bank');
require('dotenv').config();

const DB_URL = process.env.MONGO_URL;
const port = process.env.PORT || 5001;

mongoose.connect(DB_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

const seedData = async () => {
    try {
        // Clearing any existing data
        await University.deleteMany({});
        await Bank.deleteMany({});
    
        const universities = [
            'Harvard University',
            'Stanford University',
            'Massachusetts Institute of Technology (MIT)',
            'University of California, Berkeley',
            'Princeton University',
            'Columbia University',
            'Yale University',
            'University of Chicago',
            'University of Pennsylvania',
            'California Institute of Technology',
        ];
        
        const banks = [
            'State Bank of India (SBI)',
            'HDFC Bank',
            'ICICI Bank',
            'Axis Bank',
            'Bank of Baroda',
        ];
    
        // Inserting data
        await University.insertMany(universities.map(name => ({ name })));
        await Bank.insertMany(banks.map(name => ({ name })));
    
        console.log('Database seeded!');
        mongoose.disconnect();
    } catch (err) {
        console.error('Error seeding database:', err);
        mongoose.disconnect();
    }
};

seedData();

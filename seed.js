const mongoose = require('mongoose');
const University = require('./models/University');
const Bank = require('./models/Bank');
require('dotenv').config();

const universities = [
    { name: 'Harvard University' },
    { name: 'Stanford University' },
    { name: 'MIT' },
    { name: 'University of California, Berkeley' },
    { name: 'Princeton University' },
    { name: 'Columbia University' },
    { name: 'Yale University' },
    { name: 'University of Chicago' },
    { name: 'University of Pennsylvania' },
    { name: 'California Institute of Technology' }
];

const banks = [
    { name: 'State Bank of India' },
    { name: 'HDFC Bank' },
    { name: 'ICICI Bank' },
    { name: 'Axis Bank' },
    { name: 'Bank of Baroda' }
];

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URL);

        await University.insertMany(universities);
        await Bank.insertMany(banks);

        console.log('Database seeded successfully');
        mongoose.disconnect();
    } catch (error) {
        console.error('Error seeding the database:', error);
    }
}

seedDatabase();

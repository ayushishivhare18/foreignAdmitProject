require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const universityRoutes = require('./routes/universityRoutes');
const bankRoutes = require('./routes/bankRoutes');


const DB_URL = process.env.MONGO_URL;
const port = process.env.PORT || 5001;

mongoose.connect(DB_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Error', err));

const app = express();

app.use(express.json());

app.use('/api/universities', universityRoutes);
app.use('/api/banks', bankRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});
console.log('PORT:', process.env.PORT);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

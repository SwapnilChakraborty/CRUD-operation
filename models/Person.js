const mongoose = require('mongoose');

// Define the person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ['chief', 'waiter', 'manager'],
        required: true
    },
    mobile: {
        type: Number,
        required: true
    }
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
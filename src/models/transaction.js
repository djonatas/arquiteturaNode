const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    customer: {
        customerId: { type: mongoose.Types.ObjectId },
        name: { type: String }
    },
    at: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: {
        type: String,
        required: true,
        enum: ['created', 'done', 'paid'],
        default: 'created'
    },
    description: {
        type: String,
        required: true
    },
    paymentMethod:{
        type: String,
        required: true,
        enum: ['debit_card', 'credit_card']
    },
    value:{
        type: Number
    },
    card:{
        number: {
            type: String,
            required: true
        },
        holderName: {
            type: String,
            required: true
        },
        validate: {
            type: String,
            required: true
        },
        cvv: {
            type: Number,
            required: true
        }
    }
});

module.exports = mongoose.model('transaction', schema, 'transaction');
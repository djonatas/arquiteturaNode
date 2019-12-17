const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    customer: {
        customerId: { type: mongoose.Types.ObjectId },
        name: { type: String }
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    transaction: {
        description: {
            type: String,
            require: true
        },
        value: {
            type: Number,
            required: true
        },
        paymentMethod: {
            type: String,
            required: true,
            enum: ['debit_card', 'credit_card']
        }
    },
    status: {
        type: String,
        required: true,
        enum: ['created', 'done', 'paid', 'waiting_funds'],
        default: 'created'
    },
    originalValue: {
        type: Number,
        required: true
    },
    fee: {
        type: Number,
        required: true
    },
    feeCost: {
        type: Number,
        required: true
    },
    finalValue: {
        type: Number,
        required: true
    },
    payment_date: {
        type: Number,
        required: true
    },
    payment_dateExecuted: {
        type: Date
    }
});

module.exports = mongoose.model('payable', schema, 'payable');

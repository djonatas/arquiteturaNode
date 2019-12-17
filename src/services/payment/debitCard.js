const Logger = require('../../factory/logger');
const transactionModel = require('../../models/transaction');
const payableModel = require('../../models/payable');
const { lockCard } = require('../proxy/proxy');

const log = new Logger('DatabaseEvents');

class DebitCard {
    constructor(data, Database) {
        this.data = data;
        this.transaction = new Database(transactionModel);
        this.payable = new Database(payableModel);
    }

    async processPayment() {
        this.data.card.number = lockCard(this.data.card.number);
        await this.transaction.save(this.data);
        log.info('Debit card payment processed');
    }

    async processPayable(transaction) {
        const fee = 0.03;
        const feeCost = transaction.value * fee;
        const paymentDate = new Date();
        paymentDate.setDate(paymentDate.getDate() + 30);
        const payable = {
            customer: transaction.customer,
            transaction: {
                description: transaction.description,
                value: transaction.value,
                paymentMethod: transaction.paymentMethod
            },
            status: 'paid',
            originalValue: transaction.value,
            fee: 3,
            feeCost: feeCost,
            finalValue: transaction.value - feeCost,
            payment_date: paymentDate
        };

        log.info('Payable debit calc processed');

        await this.payable.save(payable);
    }
}

module.exports = DebitCard;

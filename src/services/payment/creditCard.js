const Logger = require('../../factory/logger');
const transactionModel = require('../../models/transaction');
const payableModel = require('../../models/payable');
const { lockCard } = require('../proxy/proxy');

const log = new Logger('DatabaseEvents');

class CreditCard {
    constructor(data, Database) {
        this.data = data;
        this.transaction = new Database(transactionModel);
        this.payable = new Database(payableModel);
    }

    async processPayment(data) {
        this.data.card.number = lockCard(this.data.card.number);
        await this.transaction.save(data);
        log.info('Credit card payment processed');
        return this.data;
    }

    async processPayable(transaction) {
        const fee = 0.05;
        const feeCost = transaction.value * fee;
        const paymentDate = new Date();
        const payable = {
            customer: transaction.customer,
            transaction: {
                description: transaction.description,
                value: transaction.value,
                paymentMethod: transaction.paymentMethod
            },
            status: 'waiting_funds',
            originalValue: transaction.value,
            fee: 5,
            feeCost: feeCost,
            finalValue: transaction.value - feeCost,
            payment_date: paymentDate
        };

        log.info('Payable credit calc processed');

        await this.payable.save(payable);
    }
}

module.exports = CreditCard;

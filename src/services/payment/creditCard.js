const Logger = require('../../factory/logger');
const transactionModel = require('../../models/transaction');
const payableModel = require('../../models/payable');
const { lockCard } = require('../proxy/proxy');

const log = new Logger('DatabaseEvents');

class CreditCard {
    constructor(Database) {
        this.transaction = new Database(transactionModel);
        this.payable = new Database(payableModel);
    }

    async processTransaction(data) {
        const number = lockCard(data.card.number);
        const newData = {
            ...data,
            card: {
                ...data.card,
                number: number
            }
        };
        await this.transaction.save(newData);
        log.info('Credit card transaction created');
        return newData;
    }

    calcFee(transaction) {
        const fee = 0.05;
        return transaction.value * fee;
    }

    buildStructure(transaction, feeCost) {
        const paymentDate = new Date();
        paymentDate.setDate(paymentDate.getDate() + 30);
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

        return payable;
    }

    async processPayable(transaction) {
        const feeCost = this.calcFee(transaction);
        const payable = this.buildStructure(transaction, feeCost);
        await this.payable.save(payable);
        log.info('Payable credit calc processed');
        return payable;
    }
}

module.exports = CreditCard;

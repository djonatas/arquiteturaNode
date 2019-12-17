const Logger = require('../../factory/logger');
const transactionModel = require('../../models/transaction');
const payableModel = require('../../models/payable');
const { lockCard } = require('../proxy/proxy');

const log = new Logger('DatabaseEvents');

class DebitCard {
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
        log.info('Debit card transaction created');
        return newData;
    }

    calcFee(transaction) {
        const fee = 0.03;
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
            status: 'paid',
            originalValue: transaction.value,
            fee: 3,
            feeCost: feeCost,
            finalValue: transaction.value - feeCost,
            payment_date: paymentDate
        };

        log.info('Payable debit calc processed');

        return payable;
    }

    async processPayable(transaction) {
        const feeCost = this.calcFee(transaction);
        const payable = this.buildStructure(transaction, feeCost);
        return await this.payable.save(payable);
    }
}

module.exports = DebitCard;

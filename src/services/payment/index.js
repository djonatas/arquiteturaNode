const Debit = require('./debitCard');
const Credit = require('./creditCard');
const Logger = require('../../factory/logger');
const Database = require('../../factory/database');

const log = new Logger('Payment');

class Payment {
    constructor(data) {
        if (!data.paymentMethod) {
            return;
        }
        this.data = data;
        this.generateTransactionId();

        if (this.data.paymentMethod === 'debit_card') {
            this.processor = new Debit(Database);
        } else
        if (this.data.paymentMethod === 'credit_card') {
            this.processor = new Credit(Database);
        } else {
            log.error('Invalid payment method');
        }
    }

    async pay() {
        if (!this.processor) {
            log.error('No instance for object processor - Invalid payment method');
        }
        log.info(`processing transaction ${this.data.transactionId}`);

        const payment = await this.processor.processTransaction(this.data);
        await this.processor.processPayable(this.data);
        return payment;
    }

    generateTransactionId() {
        this.data.transactionId = Math.round(new Date().getTime() / 1000);
    }
}

module.exports = Payment;

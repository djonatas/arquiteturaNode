const Debid = require('./debitCard');
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
            this.processor = new Debid(data, Database);
        } else
        if (this.data.paymentMethod === 'credit_card') {
            this.processor = new Credit(data, Database);
        } else {
            log.error('Invalid payment method');
        }
    }

    pay() {
        if (!this.processor) {
            log.error('No instance for object processor - Invalid payment method');
        }
        log.info(`processing transaction ${this.data.transactionId}`);

        // ToDo: Falta fazer o controle transacional
        const payment = this.processor.processPayment(this.data);
        this.processor.processPayable(this.data);
        return payment;
    }

    generateTransactionId() {
        this.data.transactionId = '22111';
    }
}

module.exports = Payment;

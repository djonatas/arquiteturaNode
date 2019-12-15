const Debid = require('./debitCard');
const Credit = require('./creditCard');
const Logger = require('../../factory/logger');

const log = new Logger('Payment');

class payment {
    constructor(data){
        if (!data.method) {
            return;
        }

        this.data = data;

        this.generateTransactionId();

        if (this.data.method === 'debit_card') {
            this.processor = new Debid(data);
        }
        else
        if (this.data.method === 'debit_card') {
            this.processor = new Credit(data);
        }
    }

    pay() {
        if (!this.processor){
            log.error('No instance for object processor - Invalid payment method');
        }
        log.info(`processing transaction ${this.data.transactionId}`);
        return this.processor.processPayment();
    }

    refound() {
        return this.processor.processRefound();
    }

    generateTransactionId(){
        this.data.transactionId = '22111';
    }
}

module.exports = payment;

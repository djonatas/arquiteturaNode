const Debit = require('./../../src/services/payment/debitCard');
const { expect } = require('chai');

class fakeDatabase {
    save(payable) {
        return payable;
    }
};

// initializing the processor
const processor = new Debit(fakeDatabase);

// data model for transaction
const transaction = {
    "description": "Compra 0001",
    "value": 100,
    "paymentMethod": "debit_card",
    "card": {
        "number": "999.999.999.999",
        "holderName": "João da silva",
        "cvv": 555,
        "validate": "10/2020"
    }
};

describe('DebitCard - Integration', () => {
    describe('Payable', () => {
        it('should calculate fee correclty', async () => {
            // calculate
            const response = await processor.processPayable(transaction);
            expect(response).to.have.property('status').and.to.equal('paid');
            expect(response).to.have.property('fee').and.to.equal(3);
            expect(response).to.have.property('feeCost').and.to.equal(3);
            expect(response).to.have.property('finalValue').and.to.equal(97);
            expect(response).to.have.property('transaction');
        });
    });
});

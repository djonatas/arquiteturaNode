const Credit = require('./../../src/services/payment/creditCard');
const { expect } = require('chai');

class fakeDatabase {
    save(payable) {
        return payable;
    }
};

// initializing the processor
const processor = new Credit(fakeDatabase);

// data model for transaction
const transaction = {
    "description": "Compra 0001",
    "value": 100,
    "paymentMethod": "credit_card",
    "card": {
        "number": "999.999.999.999",
        "holderName": "João da silva",
        "cvv": 555,
        "validate": "10/2020"
    }
};

describe('CreditCard - Integration', () => {
    describe('Payable', () => {
        it('should calculate fee correclty', async () => {
            // calculate
            const response = await processor.processPayable(transaction);
            expect(response).to.have.property('status').and.to.equal('waiting_funds');
            expect(response).to.have.property('fee').and.to.equal(5);
            expect(response).to.have.property('feeCost').and.to.equal(5);
            expect(response).to.have.property('finalValue').and.to.equal(95);
            expect(response).to.have.property('transaction');
        });
    });
});

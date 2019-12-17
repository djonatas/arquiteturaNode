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
        "number": "999.9999.9999.9999",
        "holderName": "João da silva",
        "cvv": 555,
        "validate": "22/2020"
    }
}

describe('DebitCard - Unit', () => {

    describe('Payable', () => {
        it('should calculate fee correclty', () => {
            const feeCost = processor.calcFee(transaction);
            expect(feeCost).to.equal(5);
        });

        it('should build structure right', () => {
            const feeCost = processor.calcFee(transaction);
            const payable = processor.buildStructure(transaction, feeCost);

            expect(payable).to.have.property('status').and.to.equal('waiting_funds');
            expect(payable).to.have.property('fee').and.to.equal(5);
            expect(payable).to.have.property('feeCost').and.to.equal(feeCost);
            expect(payable).to.have.property('finalValue').and.to.equal(transaction.value - feeCost);
            expect(payable).to.have.property('transaction');
        });
    });
});

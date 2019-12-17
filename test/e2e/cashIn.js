const request = require('supertest');
const { expect } = require('chai');

const app = require('./../../src/api/config/server');

// auth and payload
const authorization = 'ABC1234ZWE';
const basePayload = {
    "description": "Compra 0001",
    "value": 10000,
    "paymentMethod": "credit_card",
    "card": {
        "number": "4821.2057.8028.4679",
        "holderName": "João da Silva",
        "cvv": 555,
        "validate": "12/2020"
    }
};

describe('CashIn', () => {
    it('should reply as invalid date', () => {
        const payload = {
            ...basePayload,
            card: {
                ...basePayload.card,
                validate: '20/2020'
            }
        };

        return request(app)
            .post('/cashIn')
            .set('Authorization', authorization)
            .send(payload)
            .expect(400)
            .then(response => {
                expect(response.body).to.be.deep.equal(
                    [{ message: 'Invalid date or expiration date "card.validate"' }]
                )
            })
    });

    it('should give a proper reply', () => {

        const payload = {
            ...basePayload,
        };

        return request(app)
            .post('/cashIn')
            .set('Authorization', authorization)
            .send(payload)
            .expect(201)
            .then(response => {
                expect(response.body).to.have.property('success').and.to.equal(true)
                expect(response.body).to.have.property('data').and.be.a('object')
                expect(response.body.data).to.have.property('description').and.to.equal(payload.description)
                // TODO: add all validation
            })
    });
});

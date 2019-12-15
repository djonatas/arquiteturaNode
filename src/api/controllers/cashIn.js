const Validation = require('../../factory/validation');
const Card = require('../../validations/card');
const Payment = require('../../services/payment');

class cashInController {
    pay(req, res) {
        const validator = new Validation();
        const card = new Card(validator);
        const { body } = req;

        validator.isRequired(body.description, 'The attribute "description" is required');
        validator.isRequired(body.value, 'The attribute "value" is required');
        validator.isRequired(body.card, 'The attribute "card" is required');
        validator.isRequired(body.method, 'The attribute "method" is required');

        if (body.method) {
            validator.isValidValue(body.method, ['debit_card', 'credit_card'], 'Invalid payment method. Ex: debit_card or credit_card');
        }
        if (body.card) {
            card.validate(body.card);
        } else {
            validator.addError('The attribute "card.number" is required');
            validator.addError('The attribute "card.holderName" is required');
            validator.addError('The attribute "card.cvv" is required');
            validator.addError('The attribute "card.validate" is required');
        }

        if (!validator.isValid()) {
            res.status(400).send(validator.errors).end();
            return;
        }

        const payment = new Payment(body);
        payment.pay();

        res.status(201).send({
            ok: 'pay'
        });
    }
}

module.exports = cashInController;

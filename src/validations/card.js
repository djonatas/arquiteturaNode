class card {
    constructor(validator) {
        this.validator = validator;
    }

    validate(cardData) {
        this.validator.isRequired(cardData.number, 'The attribute "card.number" is required');

        let { number } = cardData;
        number = number.split('.').join('');
        number = number.split(' ').join('');
        this.validator.isCreditCard(number, 'The attribute "card.number" is invalid');

        this.validator.isRequired(cardData.holderName, 'The attribute "card.holderName" is required');
        this.validator.isRequired(cardData.cvv, 'The attribute "card.cvv" is required');
        if (cardData.cvv) {
            this.validator.isFloat(cardData.cvv, 'The attribute "card.cvv" is invalid value, ex: 052');
            this.validator.isFixedLen(cardData.cvv.toString(), 3,'The attribute "card.cvv" not contains 3 digits');
        }

        this.validator.isRequired(cardData.validate, 'The attribute "card.validate" is required');
        if (cardData.validate) {
            this.validator.hasMinLen(cardData.validate,7,'The attribute "card.validate" is invalid value, ex: 06/2001');
            // TODO: validar se é mes e ano validos
        }
    }
}

module.exports = card;

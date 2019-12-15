const Logger = require('../../factory/logger');

const log = new Logger();

const lockCard = (obj) => {

    if (!obj.number) {
        log.error('Invalid credit card number');
    }

    let strLenght = obj.number.toString().length;
    let criptNumber = '';

    for (let i = 0; i < strLenght; i++) {
        criptNumber += ( i < (strLenght-4) && obj.number[i] !== '.') ? 'X' : obj.number[i];
    }

    obj.number = criptNumber;
};

module.exports = { lockCard };
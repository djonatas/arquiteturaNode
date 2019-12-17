const Logger = require('../../factory/logger');

const log = new Logger();

const lockCard = (number) => {
    if (!number) {
        log.error('Invalid credit card number');
        return;
    }
    const strLenght = number.toString().length;
    let criptNumber = '';
    for (let i = 0; i < strLenght; i++) {
        criptNumber += (i < (strLenght-4) && number[i] !== '.') ? 'X' : number[i];
    }
    return criptNumber;
};

module.exports = { lockCard };
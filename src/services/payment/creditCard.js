const Logger = require('../../factory/logger');

const log = new Logger('DatabaseEvents');

class creditCard {
    processPayment() {
        log.info('Pagamento de cartao de crédito processado');
    }

    processRefound() {
        log.info('Cancelar pagamento');
    }
}

module.exports = creditCard;

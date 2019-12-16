const Logger = require('../../factory/logger');
const { lockCard } = require('../proxy/proxy');

const log = new Logger('DatabaseEvents');

class DebitCard {
    constructor(data) {
        this.data = data;
    }

    processPayment() {
        lockCard(this.data.card);

        log.info('Pagamento de cartao de débito processado');
    }

    processRefound() {
        log.info('Cancelar pagamento');
    }
}

module.exports = DebitCard;

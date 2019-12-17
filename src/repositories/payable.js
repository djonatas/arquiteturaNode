const Logger = require('../factory/logger');

const model = require('../models/transaction');
const log = new Logger('TransactionRepository');


class PayableRepository {
    constructor(database) {
        this.database = new database(model);
    }

    async save() {
        try {
            return await this.database.find({ status: 'created' });
        } catch (error) {
            log.error(error);
        }
        return null;
    }
}

module.exports = PayableRepository;

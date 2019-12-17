const Logger = require('../factory/logger');
const model = require('../models/payable');

const log = new Logger('PayableRepository');


class PayableRepository {
    constructor(database) {
        this.database = new database(model);
    }

    async getAvailableResource(details) {
        try {
            const available = await this.database.find({ status: 'paid' });
            const waitingFunds = await this.database.find({ status: 'waiting_funds' });

            const sumAvailable = available.reduce((sum, item) => {
                return sum + item.finalValue;
            }, 0);

            const sumWaiting = waitingFunds.reduce((sum, item) => {
                return sum + item.finalValue;
            }, 0);

            const response = {
                avaliable: {
                    value: sumAvailable,
                    details: (details && details === true) ? available : []
                },
                waitingFunds: {
                    value: sumWaiting,
                    details: (details && details === true) ? waitingFunds : []
                }
            }
            return response;
        } catch (error) {
            log.error(error);
        }
        return null;
    }
}

module.exports = PayableRepository;

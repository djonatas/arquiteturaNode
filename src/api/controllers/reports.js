const Database = require('../../factory/database');
const PayableRepository = require('../../repositories/payable');

const payableRepository = new PayableRepository(Database);

class reportsController {
    async availableResource(req, res) {
        try {
            const details = req.query.details ? JSON.parse(req.query.details) : false;
            const data = await payableRepository.getAvailableResource(details);
            res.status(200).send({
                success: true,
                data: data
            });
        } catch (ex) {
            res.status(400).send({
                success: false,
                error: ex.message
            });
        }

    }
}

module.exports = reportsController;

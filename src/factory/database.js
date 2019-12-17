const Logger = require('../factory/logger');
const log = new Logger('Database');

class Database {
    constructor(model){
        this.model = model;
    }

    async save(data) {
        try {
            const newData = Object.assign(new this.model(), data);
            const result = await newData.save();
            log.info(`DataSaved Successful ${result._id} - ${this.model.modelName}`);
        } catch (error) {
            log.error(error);
        }
    }

    async find(filter) {
        try {
            const dataResult = await this.model.find(filter);
            const jsonSTR = JSON.stringify(filter);
            log.info(`Execute find ${this.model.modelName} - ${jsonSTR}`);
            return dataResult;
        } catch (error) {
            log.error(error);
        }
        return null;
    }
}

module.exports = Database;

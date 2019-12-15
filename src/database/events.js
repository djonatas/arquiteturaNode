const Logger = require('../factory/logger');

const log = new Logger('DatabaseEvents');

class databaseEvents {
    connect() {
        log.info(`Connect in - ${this.name}`);
    }

    error(error) {
        log.error(`Unable to connect - ${this.name} - ${error}`);
    }

    disconectd() {
        log.info(`Database ${this.name} disconected`);
    }
}

module.exports = databaseEvents;

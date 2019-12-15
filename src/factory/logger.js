const winston = require('winston');

const wLogger = winston.createLogger({
    transports: [
        new winston.transports.Console({ handleExceptions: true })
    ],
    format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.simple()
    )
});

class logger {
    constructor(local){
        this.local = local;
    }

    info(message) {
        wLogger.info(`${this.local}: ${message}`);
    }

    debug(message) {
        wLogger.debug(`${this.local}: ${message}`);
    }

    warning(message) {
        wLogger.warn(`${this.local}: ${message}`);
    }

    error(message) {
        wLogger.error(`${this.local} - ${message}`);
    }
}

module.exports = logger;

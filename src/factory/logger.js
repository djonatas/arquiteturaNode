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
        wLogger.info(`[INFO] - ${this.local} - ${message}`);
    }

    debug(message) {
        wLogger.debug(`[DEBUG] - ${this.local} - ${message}`);
    }

    warning(message) {
        wLogger.warn(`[WARN] - ${this.local} - ${message}`);
    }

    error(message) {
        wLogger.error(`[ERROR] - ${this.local} - ${message}`);
    }
}

module.exports = logger;

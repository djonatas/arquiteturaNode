const winston = require('winston');

const winstonLogger = winston.createLogger({
    transports: [
        new winston.transports.Console({ handleExceptions: true })
    ],
    format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.simple()
    )
});

const logger = (local) => {
    function buildLog (type){
        console.log(`${local} - ${type} - Message`);
    }

    return {
        info: buildLog('info'),
        warn: buildLog('warn'),
        error: buildLog('error'),
        debug: buildLog('debug'),
        fatal: buildLog('fatal'),
        trace: buildLog('trace')
    };
};


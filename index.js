const Logger = require('./src/factory/logger');

const log = new Logger('index');

log.info('Valor 1');
log.error('Erro ao processar informação');
log.debug('Debug');
log.warning('Mensagem de perigo');

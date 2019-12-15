const apiServer = require('./config/server');
const configs = require('./config');
const Logger = require('../factory/logger');
// start Database Connection
require('../database');

const log = new Logger('StartServer');

const { port } = configs.server;
apiServer.set('port', port);

apiServer.listen(port, () => {
    log.info(`Server listening on port ${port}`);
});

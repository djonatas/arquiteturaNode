const app = require('./config/express');
const configs = require('./config');
const database = require('./config/database');

const { port } = configs.server;
app.set('port', port);

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});

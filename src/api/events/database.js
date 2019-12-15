const { database } = require('../config');

class databaseEvents {
    connect() {
        console.log(`Connect in - ${database.name}`);
    }

    error(error) {
        console.log(`Unable to connect - ${database.name} - ${error}`);
    }

    disconectd() {
        console.log(`Database ${database.name} disconected`);
    }
}

module.exports = databaseEvents;

class databaseEvents {
    constructor(database) {
        this.database = database;
    }

    connect() {
        console.log(`Connect in - ${this.database.name}`);
    }

    error(error) {
        console.log(`Unable to connect - ${this.database.name} - ${error}`);
    }

    disconectd() {
        console.log(`Database ${this.database.name} disconected`);
    }
}

module.exports = databaseEvents;

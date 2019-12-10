const configs = require('../config');
//const logger  = require('../../factory/logger');

class databaseEvents {
    let path;
    constructor(path){
        this.path = path;
    }

    connect(){
        console.log(`Connect in - ${this.path}`);
    }

    error(error){
        console.log(`Unable to connect - ${this.path} - ${error}`);
    }

    disconectd() {
        console.log(`Database ${this.path} disconected`);
    }
}

module.exports = databaseEvents;

const Game = require('./game');
const { database } = require('./src/api/config');

console.log(database.path);

const Poker = new Game();

Poker.join('Nome');

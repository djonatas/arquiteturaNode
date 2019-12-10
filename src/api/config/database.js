const mongoose = require('mongoose');
const { database } = require('../config');
const DatabaseEvents = require('../events/database');
const events = new DatabaseEvents(database.name);

mongoose.Promise = require('bluebird');

mongoose.connect(database.connectionString, database.options);

const db = mongoose.connection;

db.on('error', events.error);

db.on('connected', events.connect);

db.on('disconnected', events.disconectd);

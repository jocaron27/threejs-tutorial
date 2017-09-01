'use strict'
const debug = require('debug')('sql');
const chalk = require('chalk');
const Sequelize = require('sequelize');
const pkg = require('../package.json');

const name = process.env.DATABASE_NAME || pkg.name;
const connectionString = process.env.DATABASE_connectionString || `postgres://localhost:5432/${name}`;

console.log(chalk.yellow(`Opening database connection to ${connectionString}`));

// create the database instance that can be used in other database files
module.exports = new Sequelize(connectionString, {
  logging: debug, // export DEBUG=sql in the environment to get SQL queries
  native: true    // lets Sequelize know we can use pg-native for ~30% more speed (if you have issues with pg-native feel free to take this out and work it back in later when we have time to help)
});

// run our models file (makes all associations for our Sequelize objects)
require('./models')

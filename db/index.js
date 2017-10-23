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
  logging: debug,
  native: true
});

// run our models file (makes all associations for our Sequelize objects)
require('./models')

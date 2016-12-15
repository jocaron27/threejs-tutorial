'use strict'
const debug = require('debug')('sql');
const chalk = require('chalk');
const Sequelize = require('sequelize');
const pkg = require('../package.json');

const name = process.env.DATABASE_NAME || pkg.name;
const connectionString = process.env.DATABASE_URL || `postgres://localhost:5432/${pkg.name}`;

console.log(chalk.yellow(`Opening database connection to ${connectionString}`));

// create the database instance that can be used in other database files
const db = module.exports = new Sequelize(connectionString, {
  logging: debug, // export DEBUG=sql in the environment to get SQL queries 
  native: true    // lets Sequelize know we can use pg-native for ~30% more speed (if you have issues with pg-native feel free to take this out and work it back in later when we have time to help)
});

// run our models file (makes all associations for our Sequelize objects)
require('./models')

// sync the db, drop all tables if they exist and create new ones with the current attributes and associations registered on the Sequelize instance (i.e. `db`)
db.sync({force: true})
  .then(ok => console.log(`Synced models to db ${connectionString}`))
  .catch(fail => {
    if (process.env.NODE_ENV === 'production') {
      console.error(fail)
      return // Don't do this auto-create database in prod
    }
    // Otherwise, do this auto-create database work
    console.log(`Creating database ${name}...`)
    // https://nodejs.org/api/child_process.html
    require('child_process')
      // https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback
      .exec(`createdb "${name}"`, (err, _ok_) => {
        if (err) {
          return console.error(err)
        }
        sync()
      })
  })

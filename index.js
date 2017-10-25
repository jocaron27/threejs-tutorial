'use strict'
const chalk = require('chalk')
const pkg = require('./package.json')

const nameError =
`*******************************************************************

 The package name

    ${pkg.name}

 isn't valid.

Please change it in ${__dirname}/package.json
********************************************************************`

const reasonableName = /^[\w\-]+$/
if (!reasonableName.test(pkg.name)) {
  console.error(chalk.red(nameError))
}

module.exports = pkg
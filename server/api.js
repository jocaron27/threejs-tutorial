'use strict'
const api = require('express').Router()
const db = require('../db')

api.get('/hello', (req, res) => res.send({hello: 'world'}))

module.exports = api
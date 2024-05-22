const express = require('express')
const { login } = require('../controllers/login')
const loginRoute = express.Router()

loginRoute.post("/login", login)

module.exports = loginRoute